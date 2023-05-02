const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  /*配置单个代理服务器
  devServer:{
    proxy:'http://localhost:5000'
  }  */

  /*配置多个代理服务器 
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:5000',
        pathRewrite:{'^/api':''},
        //ws:true, //用于支持websocket双向通信
        //changeOrigin:ture, //用于控制请求头中的host值为一个随机值
      },
      '/demo':{
        target:'http://localhost:5001',
        pathRewrite:{'^/demo':''},
      }
    }
  }  */


})
