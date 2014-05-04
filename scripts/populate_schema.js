#!/usr/bin/env node

var db = require('../lib/db/db'),
    fs = require('fs'),
    path = require('path')

db.connectionString = require('../lib/config/env/development').pg.uri

fs.readFile('lib/db/schema.sql', function(err, data) {
    if (err) throw err
    db.query(data.toString(), function(err, result) {
        if (err) throw err
        fs.readFile('lib/db/data.dump', function(err, data) {
            db.query(data.toString(), function(err, result) {
                if (err) throw err
            })
        })
    })
})