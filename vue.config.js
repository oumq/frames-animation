module.exports = {
  publicPath: '/examples',
  pages: {
    examples: {
      entry: 'examples/main.js',
      template: 'examples/index.html',
      filename: 'examples.html',
      title: 'examples'
    }
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  devServer: {
    port: 9527
  }
}
