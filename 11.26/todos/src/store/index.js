import Vue from 'vue'
import Vuex from 'vuex'
import vuexp from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [vuexp()],
    state: {
        list: [],
        copyList: []
    },
    getters: {
        num (state) {
            return state.list.filter(i => i.status == false).length
        },
        status (state) {
            return state.list.filter(i => i.status)
        },
        flag (state) {
            return state.list.every(i => i.status == true)
        }
    },
    mutations: {
        add (state, val) {
            state.list.unshift({ input: val, id: new Date().getTime(), status: false })
            state.copyList = state.list
        },
        toggle (state, val) {
            let index = state.list.findIndex(i => i.id == val.id)
            state.list[index].status = !state.list[index].status
        },
        del (state, val) {
            let index = state.list.findIndex(i => i.id == val.id)
            state.list.splice(index, 1)
        },
    },
    actions: {
    },
    modules: {
    }
})
