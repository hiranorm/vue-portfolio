import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home.vue'
import About from '../components/pages/About.vue'
import Work from '../components/pages/Work.vue'
import Service from '../components/pages/Service.vue'
import Blog from '../components/pages/Blog.vue'
import Contact from '../components/pages/Contact.vue'
import Todo from '../components/apps/Todo.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
  ]
})
