/**
 * Created by nkhristinin on 07.10.16.
 */
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var precss = require('precss');



module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		'./src/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		preLoaders: [ //добавили ESlint в preloaders
			{
				test: /\.js$/,
				loaders: ['eslint'],
				include: [
					path.resolve(__dirname, "src"),
				],
			}
		],
		loaders: [
			{test: /\.json$/, loader: 'json'},
			{
				loaders: ['react-hot', 'babel-loader'],
				include: [path.resolve(__dirname, "src")],
				test: /\.js$/,
				plugins: ['transform-runtime']
			}, {
				test: /\.css$/,
				loader: "style-loader!css-loader!postcss-loader"
			}
		]
	},
	postcss: function () {
		return [autoprefixer, precss];
	},
	externals: {
		'cheerio': 'window',
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext': true,
	},
};