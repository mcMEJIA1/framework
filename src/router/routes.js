const routes = [
  {
    path: '/menu',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/instruments', component: () => import('pages/Index.vue') },
      { path: '/newInstrument', component: () => import('pages/newInstrument.vue') },
      { path: '/newEvidence', component: () => import('pages/newEvidence.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('pages/login')
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
