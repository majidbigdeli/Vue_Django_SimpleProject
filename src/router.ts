import Vue from 'vue';
import Router from 'vue-router';
import Auth from './components/pages/Auth.vue';
import Movies from './components/pages/Movies.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies,
    },
    {
      path: '/Auth',
      name: 'Auth',
      component: Auth,

    },
  ],
});
