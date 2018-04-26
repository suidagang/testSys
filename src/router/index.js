import Vue from 'vue'
import Router from 'vue-router'
//@ webpack.base.conf.js 中配置了'@': resolve('src'),
//当打包构建应用时，Javascript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就更加高效了。
const Login = r => require.ensure([], () => r(require('@/components/login/Login')), 'Login')
const layout = r => require.ensure([], () => r(require('@/components/views/layout/layout')), 'Layout')
const Homepage = r => require.ensure([], () => r(require('@/components/pages/homepage/homepage')), 'HomePage')
const icon = r => require.ensure([], () => r(require('@/components/pages/icon/icon')), 'Icon')
const switchpage = r => require.ensure([], () => r(require('@/components/pages/switch/switch')), 'Switch')
const button = r => require.ensure([], () => r(require('@/components/pages/useComponents/button')), 'Button')
const table = r => require.ensure([], () => r(require('@/components/pages/useComponents/table')), 'Table')
const radio = r => require.ensure([], () => r(require('@/components/pages/useComponents/radio')), 'Radio')
const checkbox = r => require.ensure([], () => r(require('@/components/pages/useComponents/checkbox')), 'Checkbox')
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: '登录页',
            component: Login
        },
        {
            path: '/',
            name: '侧栏和顶栏',
            component: layout,
            redirect: '/HomePage',
            children: [
                {
                    path: '/homePage',
                    name: '首页',
                    component: Homepage,
                },
                {
                    path: '/icon',
                    name: '图标',
                    component: icon,
                },
                {
                    path: '/switch',
                    name: '开关',
                    component: switchpage,
                },
                {
                    path: '/button',
                    name: '按钮',
                    component: button,
                },
                {
                    path: '/table',
                    name: '表格',
                    component: table,
                },
                {
                    path: '/radio',
                    name: '单选框',
                    component: radio,
                },
                {
                    path: '/checkbox',
                    name: '复选框',
                    component: checkbox,
                }
            ]

        },

        //重定向,地址错误统一跳转到login
        { path: '*', redirect: '/login' }
    ]
})
