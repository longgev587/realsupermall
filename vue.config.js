const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
	// configureWebpack: {
	// 	resolve: {
	// 		alias: {
	// 			'assets':'@/assets',
	// 			'common':'@/common',
	// 			'components':'@/components',
	// 			'network':'@/network',
	// 			'router':'@/assets',
	// 			'view':'@/view',
	// 		}
	// 	}
	// },
	chainWebpack: (config) => {
	    config.resolve.alias
	      .set('@', resolve('./src'))
	      .set('assets', resolve('./src/assets'))
	      .set('common', resolve('./src/common'))
	      .set('components', resolve('./src/components'))
	      .set('network', resolve('./src/network'))
	      .set('router', resolve('./src/router'))
	      .set('view', resolve('./src/view'))
	},
	devServer: {
	        open: true, //是否自动弹出浏览器页面
	        host: "localhost",
	        port: '8000',
	        // https: false,
	        // hotOnly: false,
	        // proxy: {
	        //     '/': {
	        //         target: 'http://localhost:8080', //API服务器的地址
	        //         ws: true,  //代理websockets
	        //         changeOrigin: true, // 虚拟的站点需要更管origin
	        //         pathRewrite: {   //重写路径 比如'/api/aaa/ccc'重写为'/aaa/ccc'
	        //             '^/api': ''
	        //         }
	        //     }
	        // },
	    }
}
