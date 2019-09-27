const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
	return {
		mode: 'development',

		devtool: 'inline-source-map',

		target: 'web',

		context: path.resolve(__dirname),

		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					loader: 'ts-loader',
				},
				{
					test: /\.html$/,
					use: [
						{
							loader: 'html-loader',
						},
					],
				},
				{ enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
				{
					test: /\.styl$/,
					loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/',
				},
			],
		},

		resolve: {
			extensions: ['.ts', '.jsx', '.tsx', '.js', 'css', '.styl'],
		},

		entry: {
			app: path.resolve(__dirname, '../src/index.tsx'),
		},

		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: '[name].bundle.js',
		},

		plugins: [
			new HtmlWebpackPlugin({
				title: 'Custom template using Handlebars',
				filename: path.resolve(__dirname, '../dist/index.html'),
				template: path.resolve(__dirname, '../src/index.html'),
				inject: 'body',
			}),
			new webpack.HotModuleReplacementPlugin(),
		],

		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			compress: true,
		},
	};
};
