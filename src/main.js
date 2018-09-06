// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './common/less/index.less';
import vfilter from './common/filter.js';
import $ from './common/util/fetch.js';
Vue.prototype.$ = $;//挂载实例这样可以在组件中直接使用
Vue.config.productionTip = false
for(let key in vfilter){
  Vue.filter(key,vfilter[key]);
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
