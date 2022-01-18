const presets = [
  [
    "@babel/env",
    {
      // @babel/env其实就是@babel/preset-env这个插件
      targets: {
        // 目标：转换完毕的代码至少支持这些版本的浏览器
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
    },
  ],
];
module.exports = {
  // 把配置信息暴露出去供babel使用
  presets,
};
