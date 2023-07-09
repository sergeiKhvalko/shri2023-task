import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildLoaders(isDev) {
	// const { isDev } = options;
	
	const babelLoader = {
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					"@babel/preset-env",
					["@babel/preset-react", {"runtime": "automatic"}]
					// 'babel-preset-es2015'
				],
			}
		}
	}

	const svgLoader = {
		test: /\.svg$/,
		use: [{
			loader: '@svgr/webpack',
			options: {
				icon: true,
				svgoConfig: {
					plugins: [
						{
							name: 'convertColors',
							params: {
								currentColor: true,
							}
						}
					]
				}
			}
		}],
	};

	const cssLoader = {
		test: /\.css$/i,
		exclude: /node_modules/,
		use: [
			isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
			// {
			// 	loader: 'css-loader',
			// 	options: {
			// 		modules: {
			// 			exportLocalsConvention: 'camelCase',
			// 			auto: (resPath) => Boolean(resPath.includes('.module.')),
			// 			localIdentName: isDev
			// 				? '[path][name]__[local]--[hash:base64:5]'
			// 				: '[hash:base64:8]',
			// 		},
			// 	},
			// },
			'css-loader',
		],
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2|woff)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		cssLoader,
	];
}