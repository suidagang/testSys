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
Vue.use(ElementUI);
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
  console.log("jin");
  if(token){
    console.log('token');
    if(to.path === '/login') {
      console.log(to.path,"login")
      next({ path: '/' })
      NProgress.done() // 结束进度条
    }else {
      if (registerRouteFresh) {
        console.log(to.path,"flag");
        store.dispatch('GenerateRoutes').then(() => { // 根据roles权限生成可访问的路由表
          console.log("dongtailuyou");
          console.log(store.getters.addRouters);
          router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
          registerRouteFresh = false
          next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record

          NProgress.done() // 结束进度条
        })
      }else{
        console.log(to.path,"no-flag");
        console.log(router);
        next();
        NProgress.done() // 结束进度条
      }
    }
  }else{
    console.log('notoken');
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
  components: { App },
  template: '<App/>'
})
