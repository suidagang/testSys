import Vue from 'vue'
import Router from 'vue-router'
//@ webpack.base.conf.js 中配置了'@': resolve('src'),
//当打包构建应用时，Javascript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
const Login = r => require.ensure([], () => r(require('@/components/login/Login')), 'Login')
const HomePage = r => require.ensure([], () => r(require('@/components/views/layout/layout')), 'HomePage')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录页',
      component: Login
    },
    {
      path: '/homePage',
      name: '主页',
      component: HomePage
    },
    //重定向,地址错误统一跳转到login
    { path: '*', redirect: '/' }
  ]
})
