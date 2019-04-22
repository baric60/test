const path = require('path');
const webpack = require('webpack');

module.exports = function() {
	const index = [path.resolve(__dirname, '../src/components/button/button.component.tsx')];
	const dist = path.resolve(path.join(process.cwd()), 'dist');

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
			index,
		},

		output: {
			path: dist,
			publicPath: '/',
			filename: '[name].[hash].js',
			pathinfo: true,
		},

		plugins: [new webpack.HotModuleReplacementPlugin()],
	};
};
