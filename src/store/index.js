// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import one from './modules/one'
import two from './modules/two'
import three from './modules/three'
import getters from './getters'
Vue.use(Vuex) // 要记得use一下哦

const store = new Vuex.Store({
    modules: {
        one,
        two,
        three
    },
    getters
});
export default  store
