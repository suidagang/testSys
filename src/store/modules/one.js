const one = {
    state: {
        sidebar: {
            opened: false
        },
        language: 'zh'
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            state.sidebar.opened = !state.sidebar.opened
        },
    },
    actions: {
        toggleSideBar({ commit }) {
            commit('TOGGLE_SIDEBAR')
        },
    }
}

export default one
