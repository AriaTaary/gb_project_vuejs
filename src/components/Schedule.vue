<template>
  <div>
    <costs-list/>
    <!-- <costs-form :list="activeList"/> -->
    <costs-page @choose-page="choosePageHandler"/>
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
import CostsList from '../components/CostsList'
import Form from '../components/CostsForm'
import CostsPage from '../components/CostsPage'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'Schedule',
  components: {
    CostsList,
    Form,
    CostsPage,
  },
  data: () => ({
    activeList: [],
    count: 3,
    page: 1,
    showFormTag: false,
    buttonMessage: 'Добавить новую статью расходов',
  }),
  computed: {
    ...mapState('general', ['formVisible']),
    ...mapState(['categoryList', 'categoryList2'])
  },
  created () {
    this.fetchData(this.page)
  },
  methods: {
    ...mapActions(['fetchData']),
    ...mapMutations(['setActiveList2']),
    ...mapMutations('general', ['setFormVisible']),
    ...mapMutations(['addDataToList']),
    choosePageHandler (page) {
      const startNum = page * this.count
      const lastNum = startNum + this.count
      this.setActiveList2(this.categoryList2.slice(startNum, lastNum))
    },
    showForm(){
      if (this.showFormTag){
        this.showFormTag = false;
         this.setFormVisible(false)
        this.buttonMessage = 'Добавить новую статью расходов';
      }
      else{
        this.showFormTag = true;
         this.setFormVisible(true)
        this.buttonMessage = 'Скрыть';
      }
    },
    costsUpdated(form){
        this.addDataToCostsList(form)
        this.showForm();
    },
  }
}
</script>