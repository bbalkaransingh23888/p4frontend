import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Page2 from '../views/Page2.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/',
    name: 'Login',
    component: Login, 
    props: true
  },
  {
    path: '/',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  routes
})

export default router
