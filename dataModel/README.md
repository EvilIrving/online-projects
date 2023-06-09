# 使用说明

> 下载的包不含 `HT` 核心库 `ht.js` ，可以使用我们发送的试用包，注意 `html` 里的引用路径配置正确。配置完后，本地启动个 `http` 服务器访问页面即可

开启一个本地的 `http` 服务器。
1. 安装 `node.js` 
2. 安装 `http-server`   
   `npm i -g http-server`
3. 在目标文件夹目录下运行如下命令：  
   `http-server`  
   若要禁用缓存，使用如下命令运行：  
   `http-server -c-1`
4. 运行后在浏览器输入 `http://localhost:8080/` 或者 `http://127.0.0.1:8080` 打开页面
   
> 也可使用其他方式，如 `Tomcat、IIS、VSCode` 的 `Live Server` 插件