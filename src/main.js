// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入elementui  UI库及样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入siderbar 的覆盖样式
import "./less/siderBar.less"
//引入覆盖table的样式
import "./less/table.less";
//引入阿里巴巴iconfont
import './iconfont/iconfont.css'
import './iconfont/iconfont'
Vue.use(ElementUI);
//引入store vueX
import store from './store/index'

import VueLoading from './components/plugin/loading'
Vue.use(VueLoading, {
    container: '.app',
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
