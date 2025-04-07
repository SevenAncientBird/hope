const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const { config } = require('process')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:3000',
        changeOrigin:true,
        pathRewrite:{'^/api':''}
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@',path.resolve('src'))
      .end();
  }
})
