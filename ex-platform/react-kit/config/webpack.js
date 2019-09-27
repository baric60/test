const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ROOT = (module.exports.ROOT = path.join(process.cwd()));
const NODE_MODULES_PATH = (module.exports.NODE_MODULES_PATH = path.resolve(ROOT, 'node_modules'));
const HOISTED_NODE_MODULES_PATH = (module.exports.HOISTED_NODE_MODULES_PATH = path.resolve(ROOT, '../../node_modules'));

module.exports = function () {
	const config = getConfig();
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
					test: /\.jsx?$/,
					use: 'babel-loader',
					exclude: [NODE_MODULES_PATH, HOISTED_NODE_MODULES_PATH],
				},
			],
		},

		resolve: {
			extensions: ['.ts', '.jsx', '.tsx', '.js', 'css', '.styl'],
		},

		entry: {
			...config.entry,
		},

		output: {
			...config.output,
			pathinfo: true,
		},

		plugins: [...config.plugins],
	};
};

const getConfig = () => {
	const src = path.resolve(path.join(process.cwd()), 'src');
	const dist = path.resolve(path.join(process.cwd()), 'dist');

	const config = {
		output: {
			path: dist,
			publicPath: '',
		},
		entry: {},
		plugins: [new webpack.HotModuleReplacementPlugin(), new ForkTsCheckerWebpackPlugin()],
	};

	console.log(collectReportScripts());

	collectReportScripts().forEach(script => {
		console.log(script);
		config.entry[script] = path.resolve(src, `${script}.tsx`);
	});

	return config;
};

const collectReportScripts = () => {
	const src = path.resolve(path.join(process.cwd()), 'src');

	const files = fs.readdirSync(src);

	return files
		.map(file => /^(.*)\.tsx$/i.exec(file))
		.map(file => file && file[1])
		.filter(file => !!file);
};
