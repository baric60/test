const path = require('path');
const webpack = require('webpack');

module.exports = function() {
	return {
		mode: 'development',

		devtool: 'inline-source-map',

		target: 'web',

		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					loader: 'ts-loader',
				},
				{
					test: /\.css$/,
					loader: 'typings-for-css-modules-loader?modules&namedExport',
				},
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
			app: path.resolve(__dirname, '../src/components/button/button.tsx'),
		},

		output: {
			path: path.resolve(__dirname, '../dist'),
			filename: '[name].bundle.js',
		},

		plugins: [new webpack.HotModuleReplacementPlugin()],
	};
};
