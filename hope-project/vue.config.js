const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const AutoImport = require('unplugin-auto-import/webpack').default;
const Components = require('unplugin-vue-components/webpack').default;
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    plugins:[
      AutoImport({
        resolver:[ElementPlusResolver()],
      }),
      Components({
        resolver: [ElementPlusResolver()],
      })
    ]
  },
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
