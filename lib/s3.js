var fs = require('fs'),
    AWS = require('aws-sdk'),
    _ = require('lodash')

var AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY_ID
var AWS_SECRET_KEY = process.env.AWS_SECRET_ACCESS_KEY
var REGION = 'eu-west-1'
AWS.config = new AWS.Config({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  region: REGION
})
var s3 = new AWS.S3()
var S3_BUCKET = process.env.S3_BUCKET || 'neoclassic'

//putImage('slides/slide1.jpg', bucketName, 'slides/slide1.jpg')

module.exports = {
    putObject: function(params, callback) {
        var defaults = {
            Bucket: S3_BUCKET,
            ContentType: 'application/json',
            ACL: 'public-read'
        }
        s3.putObject(_.extend(defaults, params), callback)
    },
    deleteObject: function(params, callback) {
        var defaults = {
            Bucket: S3_BUCKET
        }
        s3.deleteObject(_.extend(defaults, params), callback)
    },
    getPublicUrl: function(key) {
        return 'https://s3-'+ REGION + '.amazonaws.com/'+ S3_BUCKET + '/' + key
    }
}

function putImage(fileName, bucket, key) {
  fs.readFile(fileName, function(err, data) {
    if (err) { console.log(err); return }
    s3.putObject({
      Bucket: bucket,
      Key: key,
      Body: data,
      ContentType: 'image/jpeg',
      ACL: 'public-read'
    }, function(err2, data2) {
      if (err2) { console.log(err2); return }
      console.log('Put file ' + fileName + ' to bucket ' + bucket + ' by key ' + key, data2)
    })
  })
}

function createPublicBucketInEurope(bucket) {
  s3.createBucket({
    Bucket: bucket,
    ACL: 'public-read',
    CreateBucketConfiguration: {
      LocationConstraint: 'eu-west-1'
    }
  }, function(err, data) {
    if (err) { console.log(err); return }
    console.log('Bucket ' + bucket + ' created!', data)
  })
}

function deleteEmptyBucket(bucket) {
  s3.deleteBucket({
    Bucket: bucket
  }, function(err, data) {
    if (err) { console.log(err); return }
    console.log('Bucket ' + bucket + ' deleted!', data)
  })
}
function deleteWholeBucket(bucket) {
  s3.listObjects({
    Bucket: bucket
  }, function(err1, data1) {
    if (err1) { console.log(err1); return }
    var objectsToDelete = []
    for (var i = 0; i < data1.Contents.length; i++) {
      objectsToDelete.push({Key: data1.Contents[i].Key})
    }
    if (objectsToDelete.length) {
      s3.deleteObjects({
        Bucket: bucket,
        Delete: {Objects: objectsToDelete}
      }, function(err2, data2) {
        if (err2) { console.log(err2); return }
        deleteEmptyBucket(bucket)
      })
    } else {
      deleteEmptyBucket(bucket)
    }
  })

}