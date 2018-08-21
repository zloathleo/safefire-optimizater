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
        },
        {
          name: 'alarm',
          path: '/alarm',
          component: resolve => require(['../pages/AlarmPage.vue'], resolve),
          meta: { title: '报警' }
        },
        {
          name: 'analysis',
          path: '/analysis',
          component: resolve => require(['../pages/AnalysisPage.vue'], resolve),
          meta: { title: '分析' }
        }
      ]
    },
  ]
})
