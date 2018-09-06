import Vue from 'vue'
import Router from 'vue-router'
import recommend from '../components/recommend/recommend.vue';
import hot from '../components/hot/hot.vue';
import search from '../components/search/search.vue';
Vue.use(Router);
const routes = [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
    path: '/recommend',
    component: recommend
  }, {
    path: '/hot',
    component: hot
  }, {
    path: '/search',
    component: search
  }];
const router =new Router({
    linkActiveClass: 'active',
    routes
})
export default router;