import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/payIndex.vue'),
    redirect: '/payManage',
    children: [
      {
        path: '/payManage',
        name: 'payManage',
        component: () => import('../pages/payManage.vue'),
      },
      {
        path: '/currencyExchangeManage',
        name: 'currencyExchangeManage',
        component: () => import('../pages/currencyExchangeManage.vue'),
      },
      {
        path: '/paymentMethod',
        name: 'paymentMethod',
        component: () => import('../pages/paymentMethod.vue'),
      },
      {
        path: '/localPaymentMethod',
        name: 'localPaymentMethod',
        component: () => import('../pages/localPaymentMethod.vue'),
      },
      {
        path: '/otherPaymentMethod',
        name: 'otherPaymentMethod',
        component: () => import('../pages/otherPaymentMethod.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
