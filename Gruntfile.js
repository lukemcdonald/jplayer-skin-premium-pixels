/*jshint node:true */

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			build: [
				'assets/js/*.js',
				'!assets/js/*.min.js',
			],
			grunt: {
				options: {
					jshintrc: '.jshintnoderc'
				},
				src: [ 'Gruntfile.js' ]
			}
		},
		less: {
			files: {
				src: 'assets/less/style.less',
				dest: 'assets/css/style.css'
			}
		},
		postcss: {
			options: {
				processors: [
					require('autoprefixer')({
						browsers: [ '> 1%', 'last 2 versions', 'ff 17', 'opera 12.1', 'android 4' ],
						cascade: false
					})
				]
			},
			files: {
				src: 'assets/css/style.css'
			}
		},
		watch: {
			css: {
				options: {
					debounceDelay: 500,
					livereload: true
				},
				files: [ 'style.css' ],
				tasks: [ 'postcss' ]
			},
			less: {
				files: [
					'assets/less/*.less',
					'assets/less/**/*.less'
				],
				tasks: [ 'less' ]
			}
		}
	});

	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-less' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-postcss' );

	grunt.registerTask( 'default', ['build'] );
	grunt.registerTask( 'build', ['jshint', 'less', 'postcss'] );
};
