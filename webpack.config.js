module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname,
		filename: './dist/bundle.js'
	},
	module: {
		loaders: [
			{test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
			{test: /\.css$/, loader: 'style-loader!css-loader'}
		]
	}
}




