module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},
		concat: {
			options: {
				separator: '\n\n',
			},
			dist: {
				src: ['src/**/*.js'],
				dest: 'lib/choice.js',
			},
		},
		uglify: {
			my_target: {
				options: {
					sourceMap: true
				},
				files: {
					'dist/choice.js': ['lib/**/*.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['concat', 'uglify', 'karma']);
};