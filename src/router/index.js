import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(['../components/framework/Root.vue'], resolve),
      meta: { title: '框架' },
      children: [
        {
          name: 'dashboard',
          path: '/dashboard',
          component: resolve => require(['../pages/Dashboard.vue'], resolve),
          meta: { title: '系统首页' }
        },
        {
          name: 'settings',
          path: '/settings',
          component: resolve => require(['../pages/Settings.vue'], resolve),
          meta: { title: '设置' }
        }
      ]
    },
  ]
})
