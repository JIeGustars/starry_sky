const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = "物联星空";
      return args;
    })
  },
  devServer:{
    port:8088
  }
})
