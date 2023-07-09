export const buildDevServer = ( port ) => {
	return {
		port: port,
		open: true,
		historyApiFallback: true,
		hot: true
	}
}