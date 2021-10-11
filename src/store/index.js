import Vue from 'vue'
import Vuex from 'vuex'

import general from './general'

Vue.use(Vuex)

export default new Vuex.Store({
    // state: {
    //     costsList: []
    // },
    // mutations: {
    //     setCostsListData(state, payload){
    //         state.costsList = payload
    //         // console.log(state.costsList)
    //     },
    //     addDataToCostsList(state, payload){
    //         state.costsList.push(payload)
    //     },
    //     // editCostList(state, payload){
    //     //     Vue.set(state.costsList, 0, payload)
    //     //     // state.costsList[0] = payload
    //     //     // state.costsList = [...state.costsList]
    //     // }
    // },
    state: {
        categoryList: {},
        // categoryList2: {},
        activeList: [],
        // activeList2: [],
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.categoryList = payload
            // state.categoryList = Object.assign(state.categoryList, payload)
        },
        // setPaymentsListData2(state, payload) {
        //     state.categoryList2 = payload
        // },
        // setActiveList(state, data) {
        //     state.activeList = data
        // },
        setActiveList(state, data) {
            state.activeList = data
        },
        // addDataToList(state, data) {
        //     const lastElement = Object.keys(state.categoryList)[Object.keys(state.categoryList).length - 1] // получение последнего ключа из нашего объекта
        //     state.categoryList[lastElement].push(data)
        // },
        addDataToList(state, data) {
            state.categoryList.push(data)
        }
    },
    // getters: {
    //     getCostsList: state => state.costsList,
    //     getFullCostsValue: state => {
    //         // let list = state.costsList[0];
    //         // console.log(list);
    //         // let i = list.reduce((res, cur) => res + cur.value, 0);
    //         // console.log(i);
    //         // return i;
    //         return state.costsList.reduce((res, cur) => res + cur.value, 0)
    //     }
    // },
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
        // fetchData({ commit }) {
        //     return new Promise((resolve) => {
        //         setTimeout(() => {
        //             resolve([
        //                 [
        //                     { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
        //                     { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
        //                     { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 },
        //                     { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
        //                     { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
        //                     { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
        //                 ]
        //             ])
        //         }, 1000)
        //     })
        //     .then(res => commit('setCostsListData', res))
        // }
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