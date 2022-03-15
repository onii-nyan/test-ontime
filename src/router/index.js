import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ArticleDetails from '../views/articles/ArticleDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/article/:id',
    component:ArticleDetails,
    name: "ArticleDetails",
    props:true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
