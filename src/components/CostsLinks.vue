<template>
  <div>
    <div class="links">
        <!-- <button class="add-button" @click="$emit('showForm')">{{ this.buttonMessage }}</button> -->
        <div class="links_container">
            <div class="add-button" @click="changeHandler">
              <p>{{ formVisible ? 'Скрыть' : 'Показать' }} форму</p>
            </div>
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
