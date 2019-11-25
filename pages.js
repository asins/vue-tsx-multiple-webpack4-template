const path = require("path");

//生成每页的配置项
module.exports = {
  pages: [
    {
      page: "home",
      entry: path.resolve(__dirname, "./src/pages/home/app.js"), //指向入口文件
      title: "这是页面1",
      filename: "home.html",
      minify: {
        removeAttributeQuotes: false, //删除属性的双引号
        collapseInlineTagWhitespace: true //折叠一行
      },
      chunks: ["home", "common"],  // 引入公共模块 ---在build/webpack.config.js下配置的公共模块--110行
      hash: true //生成带有hash值
    },
    {
      page: "tsx",
      entry: path.resolve(__dirname, "./src/pages/tsx/app.ts"),  //指向入口文件
      title: "使用tsx语法",
      filename: "tsx.html",
      minify: {
        removeAttributeQuotes: false, //删除属性的双引号
        collapseInlineTagWhitespace: true //折叠一行
      },
      chunks: ["tsx", "common"],
      hash: true //生成带有hash值
    },
    {
      page: "login",
      entry: path.resolve(__dirname, "./src/pages/login/app.js"),  //指向入口文件
      title: "这是页面2",
      filename: "login.html",
      minify: {
        removeAttributeQuotes: false, //删除属性的双引号
        collapseInlineTagWhitespace: true //折叠一行
      },
      chunks: ["login"],
      hash: true //生成带有hash值
    },
    {
      page: "news",
      entry: path.resolve(__dirname, "./src/pages/news/app.ts"),  //指向入口文件
      title: "演示加载其它框架",
      filename: "news.html",
      minify: {
        removeAttributeQuotes: false, //删除属性的双引号
        collapseInlineTagWhitespace: true //折叠一行
      },
      chunks: ["news", "common"],
      hash: true //生成带有hash值
    },
    {
      page: "news-child",
      entry: path.resolve(__dirname, "./src/pages/news/child/app.ts"),  //指向入口文件
      title: "演示加载子目录",
      filename: "news/child.html",
      minify: {
        removeAttributeQuotes: false, //删除属性的双引号
        collapseInlineTagWhitespace: true //折叠一行
      },
      chunks: ["news/child", "common"],
      hash: true //生成带有hash值
    },
    {
      page: "point",
      entry: path.resolve(__dirname, "./src/pages/point/app.js"),  //指向入口文件
      title: "演示引入组件及传值",
      filename: "point.html",
      minify: {
        removeAttributeQuotes: false, //删除属性的双引号
        collapseInlineTagWhitespace: true //折叠一行
      },
      chunks: ["point", "common"],
      hash: true //生成带有hash值
    },
    {
      page: "ftrem",
      entry: path.resolve(__dirname, "./src/pages/ftrem/app.js"),  //指向入口文件
      title: "演示rem自适应",
      filename: "ftrem.html",
      minify: {
        removeAttributeQuotes: false, //删除属性的双引号
        collapseInlineTagWhitespace: true //折叠一行
      },
      chunks: ["ftrem", "common"],
      hash: true //生成带有hash值
    },
    {
      page: "views",
      entry: path.resolve(__dirname, "./src/pages/views/app.js"),  //指向入口文件
      title: "演示vue-router",
      filename: "views.html",
      minify: {
        removeAttributeQuotes: false, //删除属性的双引号
        collapseInlineTagWhitespace: true //折叠一行
      },
      chunks: ["views", "common"],
      hash: true //生成带有hash值
    }
  ]
};