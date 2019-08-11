import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

const Router = new VueRouter({
  /*
   * NOTE! Change Vue Router mode from quasar.conf.js -> build -> vueRouterMode
   *
   * When going with "history" mode, please also make sure "build.publicPath"
   * is set to something other than an empty string.
   * Example: '/' instead of ''
   */

  // Leave as is and change from quasar.conf.js instead!
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

Router.beforeEach((to, from, next) => {
  // Si no está logeado lo envía al login
  if (to.matched.some(record => record.meta.requiresAuth) && !store.getters['auth/isAuthenticated']) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
    return
  }
  next()
})

export default Router
