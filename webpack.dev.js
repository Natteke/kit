let path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		// 'home': common.dev + 'home.js',

	},
	output: {
		path: common.dist,
		filename: '[name].js',
		chunkFilename: 'chunks/[id].js',
		publicPath: '/kit'
	},
	devServer: {
		contentBase: '/dev/kit',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: common.dev,
				loader: "babel-loader",
				query: {
					presets:['react', 'es2015','stage-2']
				}
			},
			{
				test: /\.css$/,
				include: common.dev,
				loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
			},
			{
				test: /\.css$/,
				include: __dirname + '/plugins',
				loader: ['style-loader', 'css-loader']
			},
			{
				test: /\.(woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'styles/fonts/[name].[ext]'
						}
					}
				]
			},

			{
				test: /\.(png|jpg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(zip)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'downloads/[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [

	].concat(htmGeneratorConfig),
};