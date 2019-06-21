var path = require("path"),
　　fs = require('fs'),
　　webpack = require("webpack");

var vendors = [
       'vue/dist/vue.esm.js',
　　'vue', 
　　'vue-router', 
　　'vuex',
        'element-ui'
];

module.exports = {
　　entry: {
　　　　vendor: vendors
　　},
　　output: {
　　　　path: path.join(__dirname, "./static/js"),
　　　　filename: "Dll.js",
　　　　library: "[name]_[hash]"
　　},
　　plugins: [
　　　　new webpack.DllPlugin({
　　　　　　path: path.join(__dirname, "./", "manifest.json"),
　　　　　　name: "[name]_[hash]",
　　　　　　context: __dirname
　　　　})
　　]
}; 
