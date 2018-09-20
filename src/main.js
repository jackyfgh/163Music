// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './common/less/index.less';
import vfilter from './common/filter.js';
import $ from './common/util/fetch.js';
import FastClick from 'fastclick'
//引入懒加载插件
import VueLazyload from 'vue-lazyload'
//定义懒加载插件
Vue.use(VueLazyload, {
  error: require('./assets/img/404nofind.jpg'),
  loading: require('./assets/img/loading.png'),
  attempt: 1
})
//引入fastclick结局移动端300ms延迟的问题
FastClick.attach(document.body);
Vue.prototype.$ = $;//挂载实例这样可以在组件中直接使用
Vue.config.productionTip = false
for(let key in vfilter){
  Vue.filter(key,vfilter[key]);
}
//引入公用方法库
import format from './utils/utils';
//将公用方法定义在vue原型
Vue.prototype.format = format;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
