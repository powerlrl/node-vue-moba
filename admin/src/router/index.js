/*
 * @Author: your name
 * @Date: 2020-02-25 12:51:22
 * @LastEditTime: 2020-03-03 21:53:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \node-vue-moba\admin\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import CategoryEdit from '../views/CategoryEdit'
import CategoryList from '../views/CategoryLists'
import ItemEdit from '../views/ItemEdit'
import ItemList from '../views/ItemList'
import HeroList from '../views/HeroList'
import HeroEdit from '../views/HeroEdit'
import ArticleList from '../views/ArticleList'
import ArticleEdit from '../views/ArticleEdit'
import AdList from '../views/AdList'
import AdEdit from '../views/AdEdit'
import AdminEdit from '../views/AdminEdit'
import AdminList from '../views/AdminList'
import Login from '../views/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { isPublic: true}
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/categories/create',
        component: CategoryEdit
      },
      {
        path: '/categories/lists',
        component: CategoryList
      },
      {
        path: '/categories/edit/:id',
        component: CategoryEdit,
        props: true
      },
      {
        path: '/items/create',
        component: ItemEdit
      },
      {
        path: '/items/lists',
        component: ItemList
      },
      {
        path: '/items/edit/:id',
        component: ItemEdit,
        props: true
      },
      {
        path: '/heroes/create',
        component: HeroEdit
      },
      {
        path: '/heroes/lists',
        component: HeroList
      },
      {
        path: '/heroes/edit/:id',
        component: HeroEdit,
        props: true
      },
      {
        path: '/articles/create',
        component: ArticleEdit
      },
      {
        path: '/articles/lists',
        component: ArticleList
      },
      {
        path: '/articles/edit/:id',
        component: ArticleEdit,
        props: true
      },
      {
        path: '/ads/create',
        component: AdEdit
      },
      {
        path: '/ads/lists',
        component: AdList
      },
      {
        path: '/ads/edit/:id',
        component: AdEdit,
        props: true
      },
      {
        path: '/admin_users/create',
        component: AdminEdit
      },
      {
        path: '/admin_users/lists',
        component: AdminList
      },
      {
        path: '/admin_users/edit/:id',
        component: AdminEdit,
        props: true
      }
    ]
  },
]

const router = new VueRouter({
  routes
})
// router.beforeEach((to,from,next)=>{
//   if(!to.meta.isPublic && !localStorage.token){
//     console.log('need login')
//     return next('/login')
//   }
//   next()
// })
export default router
