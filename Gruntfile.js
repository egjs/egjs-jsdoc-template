/**
 * http://gruntjs.com/configuring-tasks
 */
module.exports = function (grunt) {
    var path = require('path');
    var DIST_PATH = 'demo/dist';
    var SRC_PATH = 'demo/sample';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            options: {
                hostname: '*'
            },
            demo: {
                options: {
                    port: 8000,
                    base: DIST_PATH,
                    middleware: function (connect, options) {
                        return [
                            require('connect-livereload')(),
                            connect.static(path.resolve(options.base))
                        ];
                    }
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            less: {
                files: ['less/**/*.less'],
                tasks: ['less']
            },

            lesscopy: {
                files: ['static/styles/jaguar.css'],
                tasks: ['copy:css']
            },

            jscopy: {
                files: ['static/scripts/main.js'],
                tasks: ['copy:js']
            },

            jsdoc: {
                files: ['**/*.tmpl', '*.js'],
                tasks: ['jsdoc']
            },

            doc: {
                files: ['demo/sample/**/*.js'],
                tasks: ['demo']
            }
        },

        clean: {
            doc: {
                src: DIST_PATH
            }
        },

        jsdoc: {
            doc: {
                src: [
                    SRC_PATH + '/**/*.js',

                    // You can add README.md file for index page at documentations.
                    'README.md'
                ],
                options: {
                    verbose: true,
                    destination: DIST_PATH,
                    configure: 'conf.json',
                    template: './',
                    'private': false
                }
            },
            /**
             * egjs 빌드시 사용하는 옵션 
             */
            egjs: {
                src: ['../egjs/src/**/*.js', 'README.md'],
                options: {
                    verbose: true,
                    destination: DIST_PATH,
                    configure: 'conf.json',
                    template: './',
                    'private': false
                }
            }
        },

        less: {
            dist: {
                src: 'less/**/jaguar.less',
                dest: 'static/styles/jaguar.css'
            }
        },

        copy: {
            css: {
                src: 'static/styles/jaguar.css',
                dest: DIST_PATH + '/styles/jaguar.css'
            },

            js: {
                src: 'static/scripts/main.js',
                dest: DIST_PATH + '/scripts/main.js'
            },

            plugin: {
              files: [{
                src: 'jsdoc-plugin/*.js',
                dest: 'node_modules/grunt-jsdoc/node_modules/jsdoc/plugins/',
                flatten : true,
                expand : true
              }]
            },
            /*
             * Alternative task to apply on changed module dir in NPM3
             */
            pluginForNewNPM: {
              files: [{
                src: 'jsdoc-plugin/*.js',
                dest: 'node_modules/jsdoc/plugins/',
                flatten : true,
                expand : true
              }]
            }
        }
    });

    // Load task libraries
    [
        'grunt-contrib-connect',
        'grunt-contrib-watch',
        'grunt-contrib-copy',
        'grunt-contrib-clean',
        'grunt-contrib-less',
        'grunt-jsdoc',
    ].forEach(function (taskName) {
        grunt.loadNpmTasks(taskName);
    });

    // Definitions of tasks
    // grunt.registerTask('default', 'Watch project files', [
    //     'demo',
    //     'connect:demo',
    //     'watch'
    // ]);
    

    grunt.registerTask('default', 'Create documentations for yours', [
        /*'less',*/
        'clean:doc',
        'copy:plugin',
        'copy:pluginForNewNPM',
        'jsdoc:doc'
    ]);

    grunt.registerTask('egjs', 'Create documentations for egjs', [
        /*'less',*/
        'clean:doc',
        'copy:plugin',
        'copy:pluginForNewNPM',
        'jsdoc:egjs'
    ]);
};
