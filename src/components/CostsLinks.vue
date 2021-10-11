<template>
  <div>
    <div class="links">
        <button class="add-button" @click="$emit('showForm')">{{ this.buttonMessage }}</button>
        <div class="links_container">
            <div class="add-button" v-for="item in list" :key="item.category" @click="linkHandler(item)">
                <p>{{item.category}}: {{item.params.value}}</p>
            </div>
            <div @click="clearRoute" class="add-button">
                <p>Очистить</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { quickLinks } from '@/assets/quickLinks'
export default {
  name: 'VLinks',
  props: {
    buttonMessage: String,
  },
  computed: {
    list () {
      return quickLinks
    }
  },
  methods: {
    linkHandler (item) {
        const { category: name, params } = item
        if (this.$route.name !== name) {
            this.$router.push({ name, params })
        }
    },
    clearRoute () {
        this.$router.push({ path: '/' })
        this.$emit('showForm', false);
    }
  }
}
</script>
