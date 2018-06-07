let path = require('path'),
	common = {
		mode: 'development',
		dev: __dirname + '/dev/',
		dist: __dirname + '/dist/',
		production: __dirname + '/production/'
	},
	htmlWebpackConfig = require('./htmlwebpackplugin.config')(common);


module.exports = {
	mode: common.mode,
	entry: {
		'home': common.dev + 'home.js',
		'modal/modal': common.dev + 'modal/modal.js',
		'modal/docs/docs': common.dev + 'modal/docs/docs.js'
	},
	output: {
		path: common.dist,
		filename: '[name].js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			include: common.dev,
			loader: "babel-loader",
			query: {
				presets:['react', 'es2015', 'stage-2']
			}
		}]
	},
	plugins: [

	].concat(htmlWebpackConfig),
};