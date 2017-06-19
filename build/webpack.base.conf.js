var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

var webpack = require('webpack')

function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	entry: {
		app: './src/main.js'
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production' ?
			config.build.assetsPublicPath : config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src'),
			 'assets': path.resolve(__dirname, '../src/assets'),
//			'bootstrap': path.resolve(__dirname,'../src/assets/libs/bootstrap/js/bootstrap.min.js'),
			//此处是手动引入jquery
			//    'jquery': path.resolve(__dirname, '../static/js/jquery.min.js') 
		}
	},
	plugins: [
		//引入jquery
		new webpack.optimize.CommonsChunkPlugin('common.js'),
		new webpack.ProvidePlugin({
			jQuery: "jquery",
			$: "jquery"
		})
	],
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueLoaderConfig
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test')]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			},
			{ 
				test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
				loader: "file" 
			},
			{ //把这个对象添加在里面
				test: /\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					},
					'less-loader'
				]
			}
		]
	}
}