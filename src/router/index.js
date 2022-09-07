import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home";
import Main from "@/views/Main";
import Life from "@/views/Life";
import Honor from "@/views/Honor";
import Study from "@/views/Study";
import Contact from "@/views/contact";
const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path: '/main',
    component: Main
  },
  {
    path: '/life',
    component: Life
  },
  {
    path: '/honor',
    component: Honor
  },
  {
    path: '/study',
    component: Study
  },
  {
    path: '/contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
