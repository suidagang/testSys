# sys-demo

> demo

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
# 注意
代码中不要用typeof 否者打包后报Uncaught TypeError: Cannot read property 'call' of undefined

#使用Vuex, IE浏览器报错，则需要：
npm install --save babel-polyfill
在webpack.config.js文件中，使用
module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/main.js"]
  }
};
# 打包后背景图片路径出错修改
修改地点1:config文件夹下的index.js build 下的assetsPublicPath 改为"./";
修改地点2:build文件夹下的utils.js
// Extract CSS when that option is specified
// (which is the case during production build)
if (options.extract) {
  return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader',
    publicPath:'../../'            //添加此代码！！！
  })
} else {
  return ['vue-style-loader'].concat(loaders)
}
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
