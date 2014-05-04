#!/usr/bin/env node

var exec = require('child_process').exec

exec('heroku pgbackups --app=neoclassic', function(error, stdout, stderr) {
    if (error) return console.log(error)
    var lines = stdout.split('\n')
    for (var i = 2; i < lines.length - 2; i++) {
        var backupId = lines[i].split(' ')[0]
        exec('heroku pgbackups:destroy --app=neoclassic ' + backupId, function(error, stdout, stderr) {
            if (error) return console.log(error)
            console.log(stdout)
        })
    }
})