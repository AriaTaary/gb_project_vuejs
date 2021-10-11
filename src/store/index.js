import Vue from 'vue'
import Vuex from 'vuex'

import general from './general'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        categoryList: [],
        activeList: [],
        activeItem: {},
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.categoryList = payload
        },
        setActiveList(state, data) {
            state.activeList = data
        },
        addDataToList(state, data) {
            state.categoryList.push(data)
        },
        deleteDataFromList(state, id) {
            const item = state.activeList.filter(elem => elem.id === id);
            const itemIndex = state.activeList.indexOf(item[0]);
            state.activeList.splice(itemIndex, 1);
        },
        updateDataFromList(state, props) {
            const item = state.activeList.filter(elem => elem.id === props.id);
            const itemIndex = state.activeList.indexOf(item[0]);
            state.activeList.splice(itemIndex, 1, props.data);
        },
        getDataFromList(state, id) {
            state.activeItem = state.activeList.filter(elem => elem.id === id);
        }
    },
    actions: {
        fetchData({ commit }, page) {
            fetch('https://raw.githubusercontent.com/Nguenchik/vue-final-project/lesson4-hw/src/server/server.json')
                .then(res => res.json())
                .then(response => {
                    const result = [].concat(...Object.values(response))
                    commit('setPaymentsListData', result)
                    commit('setActiveList', result.slice(0, 3))
                })
        }
    },
    modules: {
        general
    }
})