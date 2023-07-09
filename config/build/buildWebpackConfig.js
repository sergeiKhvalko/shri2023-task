import { buildLoaders } from './buildLoadres.js';
import { buildPlugins } from './buildPlugins.js';
import { buildResolvers } from './buildResolvers.js';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { buildDevServer } from './buildDevServer.js';


export const buildWebpackConfig = (options) => {
	const { mode, paths, isDev, port } = options

	return {
		externals: {
			'react': 'React'
		},
		mode: mode,
		entry: paths.entry,
		output: {
			filename: '[name].[contenthash].bundle.js',
			path: paths.build,
			clean: true
		},
		plugins: buildPlugins(options),
		module: { rules: buildLoaders(isDev) },
		optimization: {
			minimizer: [
				new CssMinimizerPlugin(),
			],
		},
		resolve: buildResolvers(),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(port) : undefined,
	}
}