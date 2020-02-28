module.exports = {
    devServer: {
        proxy: {
          '/api':{
              target: 'https://www.maomin.club',
              changeOrigin: true,
              pathRewrite: {
                '^/api': ''
              }
            }
        }
    }
  }