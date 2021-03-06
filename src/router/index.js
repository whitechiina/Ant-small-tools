import Vue from 'vue'
import Router from 'vue-router'
import Css from '@/view/CssView'
import Card from '@/view/CardView'
import Time from '@/view/timeView'
import Number from '@/view/NumberView'
import Music from '@/view/MusicView'
import Code from '@/view/CodeView'
import Topo from '@/view/TopoView'
import Item from '@/view/ItemView'
import Lang from '@/view/LangView'
import Popover from '@/view/PopoverView'
import Love from '@/view/LoveView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Card',
      component: Card
    },
    {
      path: '/css',
      name: 'Css',
      component: Css
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
    },
    {
      path: '/Lang',
      name: 'Lang',
      component: Lang
    },
    {
      path: '/Popover',
      name: 'Popover',
      component: Popover
    },
    {
      path: '/Love',
      name: 'Love',
      component: Love
    }
  ]
})
