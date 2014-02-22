module.exports = function (grunt) {
    grunt.initConfig({
        simplemocha: {
            options: {
                timeout: 3000

            },
            all: {
                src: ['test/dealer_spec.js']
            }
        },

        jshint: {
            all: ['Gruntfile.js'],
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