const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ROOT = (module.exports.ROOT = path.join(process.cwd()));
const NODE_MODULES_PATH = (module.exports.NODE_MODULES_PATH = path.resolve(ROOT, 'node_modules'));
const HOISTED_NODE_MODULES_PATH = (module.exports.HOISTED_NODE_MODULES_PATH = path.resolve(ROOT, '../node_modules'));

module.exports = function() {
	const index = [path.resolve(__dirname, '../src/components/button/button.component.tsx')];
	const dist = path.resolve(path.join(process.cwd()), 'dist');

	console.log(HOISTED_NODE_MODULES_PATH);

	return {
		mode: 'development',

		devtool: 'inline-source-map',

		target: 'web',

		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					use: [
						{
							loader: 'ts-loader',
							options: {
								transpileOnly: true,
							},
						},
					],
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

		plugins: [new webpack.HotModuleReplacementPlugin(), new ForkTsCheckerWebpackPlugin()],
	};
};
