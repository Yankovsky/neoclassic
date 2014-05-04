var sys = require('sys'),
    exec = require('child_process').exec,
    s3 = require('../lib/s3'),
    fs = require('fs')

var fileName = 'local.dump'
exec("pg_dump -Fc --no-acl --no-owner -h localhost -Upostgres neoclassicdev > " + fileName, function(error, stdout, stderr) {
    if (error) return console.log(error)
    fs.readFile(fileName, function(error, data) {
        if (error) return console.log(error)
        s3.putObject({
            Key: fileName,
            Body: data
        }, function(error, data) {
            if (error) return console.log(error)
            console.log("heroku pgbackups:restore --app=neoclassic DATABASE '" + s3.getPublicUrl(fileName) + "'")
            exec("heroku pgbackups:restore DATABASE '" + s3.getPublicUrl(fileName) + "'", function(error, stdout, stderr) {
                if (error) return console.log(error)
                s3.deleteObject({
                    Key: fileName
                }, function(error, data) {
                    if (error) return console.log(error)
                    fs.unlink(fileName, function(error, data) {
                        if (error) return console.log(error)
                    })
                })
            })
        })
    })
})