const state = () => ({
    currentPage: ''
})

const getters = {
    
}

const actions = {
    changeCurrentPageAction({commit}, pageName) {
        commit('changeCurrentPageMutation', pageName)
    }
}

const mutations = {
    changeCurrentPageMutation(state, pageName) {
        state.currentPage = pageName
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }