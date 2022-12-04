import Vue from 'vue'
import Vuex from 'vuex'
import vuexp from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [vuexp()],
    state: {
        list: []
    },
    getters: {
    },
    mutations: {

        add (state, val) {
            let flag = false
            state.list.forEach(i => {
                if (i.id == val.id) {
                    i.name = val.name
                    i.status = val.status
                    i.time = val.time
                    flag = true
                    return false
                }
            })
            if (flag == false) {
                state.list.push({ ...val })
            }
        }
    },
    actions: {
    },
    modules: {
    }
})
