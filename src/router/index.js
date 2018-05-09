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

/**
*不变的路由
*/
export const constantRouterMap = [
    {
        path: '/login',
        component: Login,
        name: '登录页',
        hidden: true,
        meta: { title: '登录页'}
    },
    {
        path: '',
        component: layout,
        redirect: '/homePage',
        meta: { title: '首页',icons:"icon-icon_home"},
        children: [
            {
                path: 'homePage',
                name: '首页',
                component: Homepage,
                meta: { title: '首页'}
            },
        ]

    },
]
/**
*动态路由
*/
export const asyncRouterMap = [
    {
        path: '/components',
        component: layout,
        name:"组件",
        redirect: 'noredirect',
        meta: {
            title: '组件',
            icons:"icon-list"
        },

        children: [
            {
                path: 'button',
                component: button,
                name: '按钮',
                meta: { title: '按钮'}
            },
            {
                path: 'table',
                component: table,
                name: '表格',
                meta: { title: '表格'}
            },
            {
                path: 'radio',
                component: radio,
                name: '单选框',
                meta: { title: '单选框'}
            },
            {
                path: 'checkbox',
                component: checkbox,
                name: '复选框',
                meta: { title: '复选框'}
            }
        ]
    },
    {
        path: '/switch',
        component: layout,
        redirect: '/switch/index',
        meta: { title: '开关',icons:"icon-tool"},
        children: [
            {
                path: 'index',
                component: switchpage,
                name: '开关',
                meta: { title: '开关'}
            }
        ]
    },
    {
        path: '/icon',
        component: layout,
        redirect: '/icon/index',
        meta: { title: '图标',icons:"icon-search"},
        children: [
            {
                path: 'index',
                component: icon,
                name: '图标',
                meta: { title: '图标'}
            }
        ]
    },
    { path: '*', redirect: '/login', hidden: true }
]
export default new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})
//export default new Router({
//    routes: [
//        {
//            path: '/login',
//            name: '登录页',
//            component: Login
//        },
//        {
//            path: '/',
//            name: '侧栏和顶栏',
//            component: layout,
//            redirect: '/HomePage',
//            children: [
//                {
//                    path: '/homePage',
//                    name: '首页',
//                    component: Homepage,
//                },
//                {
//                    path: '/icon',
//                    name: '图标',
//                    component: icon,
//                },
//                {
//                    path: '/switch',
//                    name: '开关',
//                    component: switchpage,
//                },
//                {
//                    path: '/button',
//                    name: '按钮',
//                    component: button,
//                },
//                {
//                    path: '/table',
//                    name: '表格',
//                    component: table,
//                },
//                {
//                    path: '/radio',
//                    name: '单选框',
//                    component: radio,
//                },
//                {
//                    path: '/checkbox',
//                    name: '复选框',
//                    component: checkbox,
//                }
//            ]
//
//        },
//
//        //重定向,地址错误统一跳转到login
//        { path: '*', redirect: '/login' }
//    ]
//})
