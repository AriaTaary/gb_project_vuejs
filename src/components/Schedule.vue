<template>
  <div>
    <costs-list/>
    <costs-page @choose-page="choosePageHandler"/>
    <costs-links
        :button-message="buttonMessage"
        @showForm="showForm"
    />
    <div v-if="showFormTag">
      <Form
        @updateCosts="costsUpdated"
      />
    </div>
  </div>
</template>

<script>
import CostsList from '../components/CostsList'
import Form from '../components/CostsForm'
import CostsPage from '../components/CostsPage'
import CostsLinks from '../components/CostsLinks'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'Schedule',
  components: {
    CostsList,
    Form,
    CostsPage,
    CostsLinks
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
    ...mapMutations(['setActiveList']),
    ...mapMutations('general', ['setFormVisible']),
    ...mapMutations(['addDataToList']),
    choosePageHandler (page) {
      const startNum = page * this.count
      const lastNum = startNum + this.count
      this.setActiveList(this.categoryList.slice(startNum, lastNum))
    },
    showForm(value){
      if (this.showFormTag || value === false){
        this.showFormTag = false;
        this.setFormVisible(false)
        this.buttonMessage = 'Добавить новую статью расходов';
      }
      else {
        this.showFormTag = true;
        this.setFormVisible(true)
        this.buttonMessage = 'Скрыть';
      }
    },
    costsUpdated(form){
        this.addDataToList(form)
        this.showForm();
    },
  }
}
</script>