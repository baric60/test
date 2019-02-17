const path = require('path');
const webpack = require('webpack');

module.exports = function() {
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
			],
		},

		resolve: {
			extensions: ['.ts', '.jsx', '.tsx', '.js'],
		},
	};
};
