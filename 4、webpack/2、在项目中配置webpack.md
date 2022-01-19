- 运行 
1、npm install webpack webpack-cli -D 命令，安装webpack相关的包

2、在项目根目录中，创建为webpack.config.js的webpack配置文件

3、配置文件内容：
module.exports = {
  mode: 'development' // mode用来指定构建模式
}

4、在package.json配置文件中的script节点下新增一个dev脚本
 "scripts": {
    "dev": "webpack"  // script节点下的脚本可以通过npm run 执行
  },

5、在终端中运行npm run dev 命令，启动webpack进行项目打包