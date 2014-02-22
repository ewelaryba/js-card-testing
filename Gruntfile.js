module.exports = function (grunt) {
    grunt.initConfig({
        simplemocha: {
            options: {
                timeout: 3000

            },
            all: {
                src: ['test/dealer_spec.js','test/card_spec.js', 'test/player_spec.js','test/deck_spec.js']
            }
        },

        jshint: {
            all: ['*.js','test/*.js'],
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