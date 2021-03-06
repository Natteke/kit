const webpack = require('webpack');
let path = require('path'),
	common = {
		mode: 'production',
		dev: __dirname + '/dev/',
		dist: __dirname + '/dist/',
		production: __dirname + '/docs/'
	},
	htmGeneratorConfig = require('./htmlwebpackplugin.config')(common);

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
	mode: common.mode,
	entry: {
		// 'home': common.dev + 'home.js',
		// 'modal/modal': common.dev + 'modal/modal.js',

		'modal/docs/docs': common.dev + 'modal/docs/docs.js',
		'modal/demos/demos': common.dev + 'modal/demos/demos.js',
		'locker/docs/docs': common.dev + 'locker/docs/docs.js',
		'locker/demos/demos': common.dev + 'locker/demos/demos.js',
		'lazy/docs/docs': common.dev + 'lazy/docs/docs.js',
		'lazy/demos/demos': common.dev + 'lazy/demos/demos.js',

	},
	output: {
		path: common.production,
		filename: '[name].js',
		chunkFilename: 'chunks/[id].js',
		publicPath: '/kit/'
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false

			}),
		]
	},
	devtool: false,
	devServer: {
		contentBase: common.production + '/kit/',
		compress: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: common.dev,
				loader: "babel-loader",
				query: {
					presets:['react', 'es2015', 'stage-2']
				}
			},
			{
				test: /\.css$/,
				include: [
					common.dev,
				],
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							allChunks: true,
							// you can specify a publicPath here
							// by default it use publicPath in webpackOptions.output
							publicPath: '../'
						}
					},
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							modules: true,
							minimize: true,
							localIdentName: "[hash:base64:5]"
						},
					},
				],
			},
			{
				test: /\.css$/,
				include: [
					__dirname + '/plugins',
					__dirname + '/node_modules'
				],
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it use publicPath in webpackOptions.output
							publicPath: '../'
						}
					},
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							modules: false,
							minimize: true,
							localIdentName: "[hash:base64:5]"
						},
					}
				]
			},

			{
				test: /\.(woff|woff2)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'styles/fonts/[name].[ext]',
							publicPath: '/kit'
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
							name: 'images/[name].[ext]',
							publicPath: '/kit'
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
							name: 'downloads/[name].[ext]',
							publicPath: '/kit'
						}
					}
				]
			}
		]
	},
	plugins: htmGeneratorConfig.concat([
		new webpack.DefinePlugin({
	  		'process.env.NODE_ENV': JSON.stringify('production')
		}),
		// собирает css файлы в 1
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "[name].css",
			chunkFilename: "styleChunks/[id].css"
		}),
		// new BundleAnalyzerPlugin(),
		new CompressionPlugin({
			algorithm: "gzip",
			asset: "[path].gz[query]",
			test: /\.js$|\.css$|\.html$/,
		})

	])
};