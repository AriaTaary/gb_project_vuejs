<template>
  <div>
    <div class="links">
        <div class="links_container">
            <v-btn class="add-button" @click="changeHandler">
              {{ formVisible ? 'Скрыть' : 'Показать' }} форму
            </v-btn>
            <v-btn class="add-button" v-for="item in list" :key="item.category" @click="linkHandler(item)">
              {{item.category}}: {{item.params.value}}
            </v-btn>
            <v-btn class="add-button" @click="clearRoute">
              Очистить
            </v-btn>
        </div>
    </div>
  </div>
</template>

<script>
import { quickLinks } from '@/assets/quickLinks'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'VLinks',
  props: {
    buttonMessage: String,
  },
  computed: {
    ...mapState('general', ['formVisible']),
    list () {
      return quickLinks
    }
  },
  methods: {
    ...mapMutations('general', ['setFormVisible']),
    changeHandler () {
      this.setFormVisible()
    },
    linkHandler (item) {
        const { category: name, params } = item
        if (this.$route.name !== name) {
            this.$router.push({ name, params })
            this.setFormVisible(false)
        }
    },
    clearRoute () {
        this.$router.push({ path: '/' })
        this.$emit('showForm', false);
    }
  }
}
</script>
