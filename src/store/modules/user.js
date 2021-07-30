import { Notify } from 'quasar'
import axios from 'axios'
const state = () => ({
    isAuth: false,
    isAdmin: false,
    user_id: ''
})

const getters = {
    isAuth: state => {
      return state.isAuth
    }
}
//TODO: Вынести axios логику в /boot/axios
const actions = {
    async loginHandler({commit}, user) {
        try{
          const response = await axios.post('http://localhost:5000/user/login', user)
          const {message,user_id,isadmin, token} = response.data
          Notify.create(message)
          if(token) {
            localStorage.setItem('token', token)
            localStorage.setItem('user_id', user_id)
            commit('setUserIdMutation', user_id)
            commit('setAuthMutation', true)
            if(isadmin === true) {
              this.$router.push('KUadmin')
              commit('setAdminMutation', true)
            }
            if(isadmin === false) {
              this.$router.push('projects')
            }
          }
        } catch (e) {
          Notify.create(e)
          throw new Error(e)
        }
      },
      logOut({commit}) {
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
        commit('setAuthMutation', false)
        commit('setUserIdMutation', null)
        commit('setAuthMutation', false)
        this.$router.push('/')
      },
      setAuthAction(state, param) {
        state.commit('setAuthMutation', param)
      }
}

const mutations = {
    setAdminMutation(state, param) {
      state.isAdmin = param
    },
    setUserIdMutation(state, user_id) {
      state.user_id = user_id
    },
    setAuthMutation(state, param) {
      state.isAuth = param
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }