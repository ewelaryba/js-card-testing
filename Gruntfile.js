module.exports = function (grunt) {
    grunt.initConfig({
        simplemocha: {
            options: {
                timeout: 3000

            },
            all: {
                src: ['test/**/*.js']
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'test/book_spec.js','card.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    strict: false
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['simplemocha', 'jshint']);
};