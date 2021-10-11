<template>
  <div class="v-page" >
    <template>
      <div class="v-page_item" v-for="(item, index) in pages" :key="item" @click="choosePage(index)">
        <p class="v-page_number">{{ item }}</p>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CostsPage',
  props: ['list'],
  computed: {
    ...mapState(['categoryList']),
    pages () {
      return this.categoryList.length ? Math.ceil(this.categoryList.length / 3) : 1
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