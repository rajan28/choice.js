module.exports = function(config) {
	config.set({
		basepath : '',
		frameworks : ['jasmine'],
		files : [
			'src/**/*.js',
			'test/**/*.js'
		],
		exclude : [
		],
		reporters : ['progress'],
		port : 9876,
		colors : true,
		logLevel : config.LOG_INFO,
		autoWatch : true,
		//Chrome, Firefox, Safari, IE available as devDependencies. Add as desired.
		browsers : ['Chrome'],
		captureTimeout : 60000,
		singleRun : false
	});
};