module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/page/index/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'index page'
    },
    page1: {
      // page 的入口
      entry: 'src/page/page1/main.js',
      // 模板来源
      template: 'public/page1.html',
      // 在 dist/index.html 的输出
      filename: 'page1.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'page1 page'
    },
  }
}
