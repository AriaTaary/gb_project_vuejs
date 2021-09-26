import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        costsList: []
    },
    mutations: {
        setCostsListData(state, payload){
            state.costsList = payload
            // console.log(state.costsList)
        },
        addDataToCostsList(state, payload){
            state.costsList.push(payload)
        },
        // editCostList(state, payload){
        //     Vue.set(state.costsList, 0, payload)
        //     // state.costsList[0] = payload
        //     // state.costsList = [...state.costsList]
        // }
    },
    getters: {
        getCostsList: state => state.costsList,
        getFullCostsValue: state => {
            // let list = state.costsList[0];
            // console.log(list);
            // let i = list.reduce((res, cur) => res + cur.value, 0);
            // console.log(i);
            // return i;
            return state.costsList.reduce((res, cur) => res + cur.value, 0)
        }
    },
    actions: {
        // fetchData({commit}){
        //     return new Promise((resolve) => {
        //         setTimeout(() => {
        //             const items = []
        //             for (let i = 1; i < 110; i++) {
        //                 items.push({
        //                     date: '01.07.2021',
        //                     category: 'Food',
        //                     value: i
        //                 })
        //             }
        //             resolve(items)
        //         }, 2000)
        //     })
        //     .then(res => commit('setCostsListData', res))
        // }
        fetchData({ commit }) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([
                        [
                            { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
                            { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                            { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 },
                            { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                            { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
                            { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
                        ]
                    ])
                }, 1000)
            })
            .then(res => commit('setCostsListData', res))
        }
    }
})