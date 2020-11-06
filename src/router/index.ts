import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'
import Header from '../components/common/Header.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/index.vue")
  },
  {
    path: "",
    redirect: 'home',
    component: Header,
    children: [{
      path: 'home',
      name: 'Home',
      meta: {
        hideInMenu: true,
        notCache: true
      },
      component: () => import('@/views/Home.vue')
    }]
  },
  {
    path: "/",
    component: Header,
    children: [{
        path: "aboutMe",
        name: "AboutMe",
        component: () => import("@/views/AboutMe.vue")
    }]
  },
  {
    path: "/",
    component: Header,
    children: [{
      path: "myPhoto",
      name: "MyPhoto",
      component: () => import("@/views/MyPhoto.vue")
    }]
  },
  {
    path: "/",
    component: Header,
    children: [{
      path: "myDiary",
      name: "MyDiary",
      component: () => import("@/views/MyDiary.vue")
    }]
  },
  {
    path: "/",
    component: Header,
    children: [{
      path: "messages",
      name: "Messages",
      component: () => import("@/views/Messages.vue")
    }]
  },
  {
    path: "/",
    component: Header,
    children: [{
      path: "contentArea",
      name: "ContentArea",
      component: () => import("@/views/ContentArea.vue")
    }]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
