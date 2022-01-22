自动打开浏览器，不用手动点击打开, 对webpack-dev-serve进行一个配置


--open 打包完成后自动打开浏览器页面
--host 配置的ip地址
--port 配置端口


```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --open --host 127.0.0.1 --port 8888"
  },
```
