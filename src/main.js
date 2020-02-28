import Vue from 'vue'
import App from './App.vue'
import router from './routers'  
import axios from 'axios'

axios.defaults.baseURL = '/api'  //关键代码

Vue.prototype.$http = axios// axios 请求接口数据配置
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
