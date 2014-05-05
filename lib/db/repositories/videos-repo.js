var db = require('./../db')

exports.create = function(video, callback) {
  db.single({
    name: 'create_video',
    text: '' +
      'INSERT INTO videos (video_id, title, thumbnail_url, position)' +
      ' SELECT $1, $2, $3, COALESCE(MAX(position) + 1, 0) FROM videos' +
      ' RETURNING id',
    values: [video.videoId, video.title, video.thumbnailUrl]
  }, function(err, row) {
    callback(err, row.id)
  })
}

exports.all = function(callback) {
  db.query({
    name: 'get_all_videos',
    text: 'SELECT id, video_id as "videoId", title, thumbnail_url as "thumbnailUrl", position FROM videos ORDER BY position'
  }, callback)
}

exports.move = function(id, dir, callback) {
  if (dir !== -1 && dir !== 1) return callback('dir must be equal -1 or 1')
  return db.connect(function(client, done) {
    client.query('BEGIN', function(err) {
      var rollback = function(err, client, done) {
        console.log(err)
        client.query('ROLLBACK', function(err) {
          console.log(err)
          done(err)
          callback(err)
        })
      }
      try {
        if (err) return rollback(err, client, done)
        var query =  (dir === 1) ? {
          name: 'get_next_video',
          text: '' +
            'SELECT id FROM videos WHERE position = (SELECT MIN(position) FROM videos ' +
            ' WHERE position > (SELECT position FROM videos WHERE id = $1))',
          values: [id]
        } : {
          name: 'get_previous_video',
          text: '' +
            'SELECT id FROM videos WHERE position = (SELECT MAX(position) FROM videos ' +
            ' WHERE position < (SELECT position FROM videos WHERE id = $1))',
          values: [id]
        }
        client.query(query, function(err, result) {
          if (err) return rollback(err, client, done)
          if (result.rowCount !== 1) return rollback('cannot move video with ' + id + ' in direction ' + dir, client, done)
          var otherVideoId = result.rows[0].id
          return client.query({
            name: 'swap_videos',
            text: '' +
              'WITH videos_to_swap AS (SELECT * FROM videos WHERE id IN ($1, $2))' +
              ' UPDATE videos SET position = (SELECT SUM(position) FROM videos_to_swap) - position' +
              ' WHERE id IN (SELECT id FROM videos_to_swap)',
            values: [id, otherVideoId]
          }, function(err, result) {
            if (err) return rollback(err, client, done)
            if (result.rowCount !== 2) return rollback('cant swap videos with ids ' + id + ' and ' + otherVideoId, client, done)
            return client.query('COMMIT', function(err) {
              done(err)
              callback(err, { swappedVideoId: otherVideoId })
            })
          })
        })
      } catch (err) {
        return rollback(err, client, done)
      }
    })
  }, callback)
}

exports.remove = function(id, callback) {
  db.query({
    name: 'delete_video',
    text: 'DELETE FROM videos WHERE id = $1',
    values: [id]
  }, callback)
}