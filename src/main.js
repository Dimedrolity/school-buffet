import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import '../src/app.css'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
