import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main.vue'
import recommend from '../components/recommend/recommend.vue';
import hot from '../components/hot/hot.vue';
import search from '../components/search/search.vue';
import playList from '../components/playList/playList.vue';
import songDetails from '../components/songDetails/songDetails.vue'
Vue.use(Router);
const routes = [
    {
        path:'/163music',
        component:main,
        children:[
          {
            path: '/163music/recommend',
            name:'recommend',
            component: recommend
          }, {
            path: '/163music/hot',
            component: hot
          }, {
            path: '/163music/search',
            component: search
          }
        ]
    },
    {
    path: '/playList/:id',
    component: playList
    },
    {
      path: '/songDetails/:id',
      name: 'songDetails',
      component: songDetails
    },
    {
    path: '/',
    redirect: '/163music/recommend',
    }
];
const router =new Router({
    linkActiveClass: 'active',
    routes,
    scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
export default router;