import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Editor from '@/components/Editor'
import Board from '@/components/Board'
import App from '@/components/BoardEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    },
    {
      path: '/board',
      name: 'board',
      component: Board
    },
    {
      path: '/app',
      name: 'app',
      component: App
    }
  ]
})
