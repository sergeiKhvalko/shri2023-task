import webpack from "webpack"
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins(options) {
	return [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({ template: options.paths.html }),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css',
		}),
	]
}