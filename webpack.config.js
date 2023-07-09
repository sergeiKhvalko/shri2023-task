import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { buildWebpackConfig } from './config/build/buildWebpackConfig.js';

export default (env) => {
	const paths = {
		entry: path.resolve(__dirname, 'src', 'index.js'),
		build: path.resolve(__dirname, 'dist'),
		html: path.resolve(__dirname, 'public', 'index.html')
	}

	const mode = env.mode || 'development'
	const port = env.port || 3000
	const isDev = mode === 'development'

	const config = buildWebpackConfig({
		mode,
		port,
		paths,
		isDev
	})

	return config
}

