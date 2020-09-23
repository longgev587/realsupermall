import { createRouter, createWebHistory } from 'vue-router'
const home=()=>import('../views/home/home')  
const cart=()=>import('../views/cart/cart')
const category=()=>import('../views/category/category')
const profile=()=>import('../views/profile/profile')

const routes = [
  {
  	path:"",
  	redirect:"/home"
  },
  {
  	path:"/home",
  	component:home
  },
  {
  	path:"/cart",
  	component:cart
  },
  {
  	path:"/category",
  	component:category
  },
  {
  	path:"/profile",
  	component:profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
