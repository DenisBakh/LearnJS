const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname, 'src'), // исходники по умолчанию
	mode: 'development',
	entry: {
		test: './test.js',
		index: './index.js',
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: './index.html',
			chunks: ['index']
		}),
		new HtmlWebpackPlugin({
			filename: './test.html',
			template: './test.html'
		}),
		new CleanWebpackPlugin()
	]
}