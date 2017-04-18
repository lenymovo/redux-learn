const webpack = require('webpack');

module.exports = {

	entry: './js/main.js',

	output: {
		filename: 'js/build/build.js',
		library: 'home'
	},

	watch: true,

	watchOptions: {
		aggregateTimeout: 300
	},

	devtool: 'source-map',

	resolve: {
		modules: ['node_modules'],
		extensions: ['.js']
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
}