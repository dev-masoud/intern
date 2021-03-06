import Vue from 'vue'
import App from './App.vue'
import { routes} from './router/index'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter);

export const router = new VueRouter ({
  routes,
  mode:"history",
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
