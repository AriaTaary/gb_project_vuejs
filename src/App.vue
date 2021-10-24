<template>
  <v-app>
    <v-main id="app" class="container">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "https://unpkg.com/element-ui/lib/theme-chalk/index.css";
@import "assets/CSS/main.css";
</style>