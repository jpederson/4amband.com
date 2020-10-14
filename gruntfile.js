
const sass = require('node-sass');

module.exports = function(grunt) {
    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            sass: {
                files: ['css/src/*.{scss,sass}'],
                tasks: ['sass:dist']
            },
            livereload: {
                files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
                options: {
                    livereload: true
                }
            }
        },

        sass: {
            options: {
                implementation: sass
            },
            dist: {
                files: {
                    'css/main.css': 'css/src/main.scss'
                }
            },
            sourceMapSimple: {
                options: {
                    sourceMap: true
                },
                files: {
                    'css/main.map.css': 'css/src/main.scss'
                }
            },        
        }
    });
    grunt.registerTask('default', ['sass:dist', 'watch']);
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};

