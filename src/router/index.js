import Vue from 'vue'
import Router from 'vue-router'
import Card from '@/view/CardView'
import Time from '@/view/timeView'
import Number from '@/view/NumberView'
import Music from '@/view/MusicView'
import Code from '@/view/CodeView'
import Topo from '@/view/TopoView'
import Item from '@/view/ItemView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Card',
      component: Card
    },
    {
      path: '/time',
      name: 'Time',
      component: Time
    },
    {
      path: '/number',
      name: 'Number',
      component: Number
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/topo',
      name: 'Topo',
      component: Topo
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    }
    
  ]
})
