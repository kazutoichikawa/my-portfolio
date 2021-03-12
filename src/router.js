import Vue from 'vue'
import Router from 'vue-router'
import Language from './components/Languages'
import Profile from './components/Profile'
import Work from './components/Works'
import Root from './components/Root'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Root
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/language',
      component: Language
    },
    {
      path: '/work',
      component: Work
    }
  ]
})
