<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      toShow: false
    }
  },
  methods: {
    toSwitch () {
      this.toShow = !this.toShow
    }
  }
}
</script>

<style lang="scss">
@import "https://unpkg.com/element-ui/lib/theme-chalk/index.css";
@import "assets/CSS/main.css";
</style>
