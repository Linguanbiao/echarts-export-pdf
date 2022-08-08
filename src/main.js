import Vue from 'vue'
import App from './App.vue'
import htmlToPdf from '@/utils/htmlToPdf.js'
//引入echarts后，不能全局使用echarts
import * as echarts from 'echarts';
import router from "./router";
//通过Vue.prototype将echarts保存为全局变量（原则上$echarts可以为任意变量名）
Vue.prototype.$echarts = echarts



Vue.use(htmlToPdf)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')