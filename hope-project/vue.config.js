const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const { config } = require('process')

module.exports = defineConfig({
  pluginOptions:[

  ],
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        target:'http://localhost:8080',
        changeOrigin:true,
        pathRewrite:{'^/api':''}
      }
    }
  },
  lintOnSave:false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@',path.resolve('src'))
      .end();
  }
})
