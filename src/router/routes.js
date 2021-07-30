
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path:'/auth',component: () => import('pages/AuthPage.vue') },
      { path:'/logup',component: () => import('pages/LogupPage.vue') },
      { path:'/projects',component: () => import('pages/client_panel/Projects.vue') },
      { path:'/KUadmin',component: () => import('pages/admin_panel/AdminToolbar.vue') },
      { path:'/KUadmin/orders',component: () => import('pages/admin_panel/Orders.vue') },
      { path:'/KUadmin/search',component: () => import('pages/admin_panel/Search.vue') },
      { path:'/orderProject',component: () => import('pages/OrderPage.vue') },
      { path:'/chat',component: () => import('pages/ChatPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  },
]

export default routes
