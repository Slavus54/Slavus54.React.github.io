const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {presets: ['env', 'react']}
					}
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{   
				test: /\.tsx?$/, 
				loader: 'ts-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],
	resolve: {
    	modules: ['node_modules'],
    	extensions: [".js", ".json", ".jsx", ".css", ".ts", ".tsx"]
  	},
  	devServer: {
    	clientLogLevel: 'silent'
  	}
}