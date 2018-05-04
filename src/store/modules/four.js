import { asyncRouterMap, constantRouterMap } from '@/router'


/**
* 递归过滤异步路由表，返回符合用户色角权限的路由表
* @param asyncRouterMap
* @param roles
*/
function filterAsyncRouter(asyncRouterMap) {
    const accessedRouters = asyncRouterMap.filter(route => {
        if (route.children && route.children.length) {
            route.children = filterAsyncRouter(route.children)
        }
        return true
    })
    return accessedRouters
}

const four = {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers
            state.routers = constantRouterMap.concat(routers)
        }
    },
    actions: {
        GenerateRoutes({ commit }) {
            return new Promise(resolve => {

                let accessedRouters
                accessedRouters = filterAsyncRouter(asyncRouterMap)
                commit('SET_ROUTERS', accessedRouters)
                resolve()
            })
        }
    }
}

export default four
