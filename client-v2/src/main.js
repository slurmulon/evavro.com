import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './plugins/composition'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
