import Vue from 'vue'
import App from './App.vue'
import 'comps/svg.js'

Vue.config.productionTip = false
console.log(process.env.foo, process.env.VUE_APP_BAR)

new Vue({
  render: h => h(App)
}).$mount('#app')
