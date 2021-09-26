<template>
  <div id="app" class="container">
    <h1>Мои расходы</h1>
    <!-- <List
      v-bind:sortCosts="sortCosts"
    /> -->
    <List
      v-bind:sortCosts="costsList[0]"
    />
    <Pagination
      v-bind:costs="costs"
      v-on:updatePagination="paginationUpdated"
    />
    <button class="add-button" @click="showForm">{{ this.buttonMessage }}</button>
    <div v-if="showFormTag">
      <Form
        v-bind:costs="costs"
        v-on:updateCosts="costsUpdated"
      />
    </div>

  </div>
</template>

<script>
import List from './components/CostsList.vue'
import Form from './components/CostsForm.vue'
import Pagination from './components/Pagination.vue'

import {mapMutations, mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
    List, Form, Pagination
  },
  data: () => ({
    costs: [],
    sortCosts: [],
    // listCosts: [],
    showFormTag: false,
    buttonMessage: 'Добавить новую статью расходов',
    firstItem: 0,
    lastItem: 0,
  }),
  methods: {
    ...mapMutations(['setCostsListData', 'addDataToCostsList']),
    ...mapActions({fetchListData: 'fetchData'}),
    fetchData(){
      return [
        {
          id: 1,
          date: '01-01-2021',
          category: 'Еда',
          value: 177,
        },
        {
          id: 2,
          date: '01-01-2021',
          category: 'Транспорт',
          value: 145,
        },
        {
          id: 3,
          date: '01-01-2021',
          category: 'Развлечения',
          value: 188,
        }
      ]
    },
    showForm(){
      if (this.showFormTag){
        this.showFormTag = false;
        this.buttonMessage = 'Добавить новую статью расходов';
      }
      else{
        this.showFormTag = true;
        this.buttonMessage = 'Скрыть';
      }
    },
    costsUpdated(form){
      this.addDataToCostsList(form)
      this.showForm();
    },
    paginationUpdated(first, last){
      this.sortCosts = [];
      for (let key in this.costs) {
        if (key >= first & key <= last){
          this.sortCosts.push(this.costs[key]);
        }
      }
    }
  },
  computed: {
    costsList(){
      return this.$store.getters.getCostsList
    }
  },
  created(){
    this.costs = this.fetchData();
    for (let key in this.costs) {
        this.lenght = this.lenght + 1;
    }
    this.sortCosts.push(this.costs[0]);
    // this.setCostsListData(this.fetchData())
    this.fetchListData();
  }
}
</script>

<style lang="scss">
@import "https://unpkg.com/element-ui/lib/theme-chalk/index.css";
@import "assets/CSS/main.css";
</style>
