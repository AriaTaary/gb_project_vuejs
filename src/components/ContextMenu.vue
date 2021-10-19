<template>
  <div class="context-menu">
    <div class="context-menu-item" @click.prevent="editAction">Изменить</div>
    <div class="context-menu-item" @click.prevent="deleteAction">Удалить</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ContextMenu',
  props: ['id'],
  data () {
    return {
      test: ''
    }
  },
  methods: {
    ...mapMutations(['getDataFromList']),
    ...mapMutations(['deleteDataFromList']),
    editAction() {
        this.getDataFromList(this.id);
        this.$emit('showForm');
    },
    deleteAction() {
        this.deleteDataFromList(this.id);
    }
  }
}
</script>