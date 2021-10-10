<template>
  <div class="v-page" >
    <template>
      <div class="v-page_item" v-for="(item, index) in pages" :key="item" @click="choosePage(index)">
        <p class="v-page_number">{{ item }}</p>
      </div>
    </template>
    <!-- <div @click="clickHandler(index)" v-for="(item,index) in makeArray" :key="index">
      {{ index }}
    </div> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'VPage',
  props: ['list'],
  computed: {
    ...mapState(['categoryList', 'categoryList2']),
    makeArray () {
      return this.categoryList
    },
    pages () {
      return this.categoryList2.length ? Math.ceil(this.categoryList2.length / 3) : 1
    }
  },
  methods: {
    ...mapMutations(['setActiveList']),
    choosePage (page) {
      this.$emit('choose-page', page)
    },
    clickHandler (page) {
      this.setActiveList(this.categoryList[page])
    }
  }
}
</script>