import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

import store from './store'
import router from './router'

import plugin from './plugins/plugin'


Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.use(plugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')