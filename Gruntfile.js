'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt)

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt)

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist'
    },
    express: {
      options: {
        port: process.env.PORT || 9000
      },
      dev: {
        options: {
          script: 'server.js',
          debug: true
        }
      },
      prod: {
        options: {
          script: 'dist/server.js',
          node_env: 'production'
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= express.options.port %>'
      }
    },
    watch: {
      coffee: {
        files: ['<%= yeoman.app %>/scripts/**/*.{coffee,litcoffee,coffee.md}'],
        tasks: ['newer:coffee:dist']
      },
      coffeeTest: {
        files: ['test/client/{,*/}*.{coffee,litcoffee,coffee.md}'],
        tasks: ['newer:coffee:test', 'karma']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.styl'],
        tasks: ['stylus', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          '<%= yeoman.app %>/views/**/*.{html,jade}',
          '{.tmp,<%= yeoman.app %>}/styles/**/*.styl',
          '{.tmp,<%= yeoman.app %>}/scripts/**/*.js',
          '<%= yeoman.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ],

        options: {
          livereload: true
        }
      },
      express: {
        files: [
          'server.js',
          'lib/**/*.{js,json}'
        ],
        tasks: ['express:dev', 'wait'],
        options: {
          livereload: true,
          nospawn: true //Without this option specified express won't be reloaded
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              '<%= yeoman.dist %>/*',
              '!<%= yeoman.dist %>/.git*',
              '!<%= yeoman.dist %>/Procfile',
              '!<%= yeoman.dist %>/bin'
            ]
          }
        ]
      },
      heroku: {
        files: [
          {
            dot: true,
            src: [
              'heroku/*',
              '!heroku/.git*',
              '!heroku/Procfile',
              '!heroku/bin'
            ]
          }
        ]
      },
      server: '.tmp'
    },

    stylus: {
      compile: {
        options: {
          paths: ['node_modules/grunt-contrib-stylus/node_modules']
        },
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.app %>/styles',
            src: ['index.styl', 'admin-index.styl'],
            dest: '.tmp/styles/',
            ext: '.css'
          }
        ]
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/styles/',
            src: 'index.css',
            dest: '.tmp/styles/'
          }
        ]
      }
    },

    // Debugging with node inspector
    'node-inspector': {
      custom: {
        options: {
          'web-host': 'localhost'
        }
      }
    },

    // Use nodemon to run server in debug mode with an initial breakpoint
    nodemon: {
      debug: {
        script: 'server.js',
        options: {
          nodeArgs: ['--debug-brk'],
          env: {
            PORT: process.env.PORT || 9000
          },
          callback: function(nodemon) {
            nodemon.on('log', function(event) {
              console.log(event.colour)
            })

            // opens browser on initial server start
            nodemon.on('config:update', function() {
              setTimeout(function() {
                require('open')('http://localhost:8080/debug?port=5858')
              }, 500)
            })
          }
        }
      }
    },

    // Compiles CoffeeScript to JavaScript
    coffee: {
      options: {
        sourceMap: true,
        sourceRoot: ''
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.app %>/scripts',
            src: '**/*.coffee',
            dest: '.tmp/scripts',
            ext: '.js'
          }
        ]
      },
      test: {
        files: [
          {
            expand: true,
            cwd: 'test/client/spec',
            src: '{,*/}*.coffee',
            dest: '.tmp/client/spec',
            ext: '.js'
          }
        ]
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/public/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/public/styles/{,*/}*.css',
            '<%= yeoman.dist %>/public/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/public/fonts/*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: [
        '<%= yeoman.app %>/views/partials/vendor-scripts.jade',
        '<%= yeoman.app %>/views/partials/common-scripts.jade',
        '<%= yeoman.app %>/views/partials/app/app-scripts.jade',
        '<%= yeoman.app %>/views/partials/app/app-styles.jade',
        '<%= yeoman.app %>/views/partials/admin/admin-scripts.jade',
        '<%= yeoman.app %>/views/partials/admin/admin-styles.jade'
      ],
      options: {
        dest: '<%= yeoman.dist %>/public'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/views/**/*.jade'],
      css: ['<%= yeoman.dist %>/public/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>/public', '<%= yeoman.dist %>/public/images']
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      options: {
        cache: false
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.app %>/images',
            src: '{,*/}*.{png,jpg,gif}',
            dest: '<%= yeoman.dist %>/public/images'
          }
        ]
      }
    },

    svgmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.app %>/images',
            src: '{,*/}*.svg',
            dest: '<%= yeoman.dist %>/public/images'
          }
        ]
      }
    },

    htmlmin: {
      dist: {
        options: {
          //collapseWhitespace: true,
          //collapseBooleanAttributes: true,
          //removeCommentsFromCDATA: true,
          //removeOptionalTags: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= yeoman.app %>/views',
            src: ['*.html', 'partials/**/*.html'],
            dest: '<%= yeoman.dist %>/views'
          }
        ]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/concat/scripts',
            src: '**/*.js',
            dest: '.tmp/concat/scripts'
          }
        ]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/views/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>',
            dest: '<%= yeoman.dist %>/public',
            src: [
              '*.{ico,png,txt}',
              '.htaccess',
              'google9959b1fe52391372.html',
              'yandex_61e86b214024b0ce.html',
              'wmail_dceb78114afc4bde.html',
              'sitemap.xml',
              'BingSiteAuth.xml',
              'bower_components/**/*',
              'images/{,*/}*.{webp}',
              'third-party/**/*'
            ]
          },
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>/bower_components/bootstrap-css-only/fonts/',
            dest: '<%= yeoman.dist %>/public/fonts',
            src: '*'
          },
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.app %>/views',
            dest: '<%= yeoman.dist %>/views',
            src: '**/*.jade'
          },
          {
            expand: true,
            cwd: '.tmp/images',
            dest: '<%= yeoman.dist %>/public/images',
            src: ['generated/*']
          },
          {
            expand: true,
            dest: '<%= yeoman.dist %>',
            src: [
              'package.json',
              'server.js',
              'lib/**/*'
            ]
          }
        ]
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'coffee:dist',
        'stylus'
      ],
      test: [
        'coffee',
        'stylus'
      ],
      debug: {
        tasks: [
          'nodemon',
          'node-inspector'
        ],
        options: {
          logConcurrentOutput: true
        }
      },
      dist: [
        'coffee',
        'stylus',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.styl': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= yeoman.app %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },

    mochaTest: {
      options: {
        reporter: 'spec'
      },
      src: ['test/server/**/*.js']
    },

    env: {
      test: {
        NODE_ENV: 'test'
      }
    }
  })

  // Used for delaying livereload until after server has restarted
  grunt.registerTask('wait', function() {
    grunt.log.ok('Waiting for server reload...')

    var done = this.async()

    setTimeout(function() {
      grunt.log.writeln('Done waiting!')
      done()
    }, 500)
  })

  grunt.registerTask('express-keepalive', 'Keep grunt running', function() {
    this.async()
  })

  grunt.registerTask('serve', function(target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'express:prod', 'open', 'express-keepalive'])
    }

    if (target === 'debug') {
      return grunt.task.run([
        'clean:server',
        'concurrent:server',
        'autoprefixer',
        'concurrent:debug'
      ])
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'express:dev',
      'open',
      'watch'
    ])
  })

  grunt.registerTask('server', function() {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.')
    grunt.task.run(['serve'])
  })

  grunt.registerTask('test', function(target) {
    if (target === 'server') {
      return grunt.task.run([
        'env:test',
        'mochaTest'
      ])
    }

    if (target === 'client') {
      return grunt.task.run([
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'karma'
      ])
    }

    grunt.task.run([
      'env:test',
      'mochaTest',
      'clean:server',
      'concurrent:test',
      'autoprefixer',
      'karma'
    ])
  })

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngmin',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ])

  grunt.registerTask('heroku', function() {
    grunt.log.warn('The `heroku` task has been deprecated. Use `grunt build` to build for deployment.')
    grunt.task.run(['build'])
  })

  grunt.registerTask('default', [
    'test',
    'build'
  ])
}
