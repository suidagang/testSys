// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入页头进度条
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import router from './router'
//引入elementui  UI库及样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入siderbar 的覆盖样式
import "./less/siderBar.less"
//引入覆盖table的样式
import "./less/table.less";
//覆盖浏览器样式
import "./less/framework.less";
//引入阿里巴巴iconfont
import './iconfont/iconfont.css'
import './iconfont/iconfont'
// filter(自定义过滤器)
import './filter/filter'
// directive(自定义指令)
import './directive/Commondirective'
//设置全局eventbus来传值
window.eventBus = new Vue();
//引入图片懒加载
import VueLazyload from 'vue-lazyload'
//图片懒加载配置项
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/logo.png'),
  loading: require('./assets/logo.png'),
  try: 1 // default 1
})
//引入国际化翻译
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
//获取浏览器使用的语言
let language = (navigator.language || navigator.browserLanguage).substring(0, 2).toLowerCase();
const i18n = new VueI18n({
  locale: language, // 语言标识
  messages: {
    'zh': require('./i18n/zh'),
    'en': require('./i18n/en')
  }
})

// 引入vue-amap
import VueAMap  from 'vue-amap';
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 申请的高德key
  key: 'eccf7dedb7fba5654c93556be3a52b8f',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});
//封装axios  ajax请求
import axios from 'axios'
import {post,fetch} from './axios/api'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;

import Simplert from 'vue2-simplert-plugin'
require('vue2-simplert-plugin/dist/vue2-simplert-plugin.css')

Vue.use(Simplert)


Vue.use(ElementUI);
//页面进度条的使用
NProgress.configure({ showSpinner: false })// NProgress Configuration
//引入store vueX
import store from './store/index'

import VueLoading from './components/plugin/loading'
Vue.use(VueLoading, {
    container: '.app',
})
/**
 * next()直接跳转到to.path路径，
 * 没有再执行一遍beforeEach导航钩子，next('/')或者next('/login')自己指定路径的，
 * 路由跳转的时候还执行一遍beforeEach导航钩子，所以上面出现死循环；
**/
let registerRouteFresh = true
router.beforeEach((to, from, next) => {
  NProgress.start() // 开始进度条
  var token = localStorage.getItem("token");
  if(token){
    if(to.path === '/login') {
      next({ path: '/' })
      NProgress.done() // 结束进度条
    }else {
      if (registerRouteFresh) {
        store.dispatch('GenerateRoutes').then(() => { // 根据roles权限生成可访问的路由表
          router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
          registerRouteFresh = false
          next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          NProgress.done() // 结束进度条
        })
      }else{
        next();
        NProgress.done() // 结束进度条
      }
    }
  }else{
    if(to.path=='/login'){//如果是登录页面路径，就直接next()
      next();
      NProgress.done()
    }else{//不然就跳转到登录；
      next('/login') // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }

  }

})


/**
 * 2.2.0 新增
 * 设置为 false 以阻止 vue 在启动时生成生产提示。
 */
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
