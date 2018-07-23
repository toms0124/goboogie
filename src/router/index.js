import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Posts from '../components/Posts.vue'
import Post from '../components/Post.vue'
import {Auth} from '../api'
import Home from '../views/Home'
import NewPost from '../components/NewPost.vue'
import ArticleNewsFeed from '../views/ArticleNewsFeed'
import ArticleThemaFeed from '../views/ArticleThemaFeed'
import ArticleThemaList from '../views/ArticleThemaList'
import ArticleEdit from '../views/ArticleEdit'
import HotAuthor from '../views/HotAuthor'
import HallofFame from '../views/HallofFame'
import Hamburger from '../views/Hamburger'
import Profile from '../views/Profile'

Vue.use(VueRouter) //뷰라우터는 플러그인 형태이므로 vue.use함수 이용하여 등록

//  const requireAuth = (to, from, next) => {
//   if (Auth.loggedIn()) return next()
//   next({
//     path: '/login',
//     query: { redirect: to.fullPath }
//   })
// };

export default new VueRouter({
  routes: [
  {
    path: '/',
    component: Home,
    children: [ //ArticleNewsFeed, ArticleThema,HotAuthor,
      {
        path: '',
        name: 'home',
        component: ArticleNewsFeed
      },
      {
        path: '/ArticleThemaFeed',
        name:'ArticleThemaFeed',
        component:ArticleThemaFeed
      }
  //     {
  //       path: 'my-feed',
  //       name: 'home-thema',
  //       component: ArticleThemaFeed,
  //       children:[
  //         {
  //           path:'choice-feed',
  //           name:'themafeed',
  //           component:ArticleThemaList
  //         }
  //       ]
  //     },
  //     {
  //       path:'Hamburger/',
  //       name: 'hamburger',
  //       component: Hamburger
  //     },
  //     {
  //       path: 'HotAuthor/:tag', //:뒤에는 무엇...
  //       name: 'hotauthor',
  //       component: HotAuthor
  //     }
  //   ]
  // },
  // {
  //   name: 'login',
  //   path: '/login',
  //   component: Login
  // },
  // {
  //   name: 'register',
  //   path: '/register',
  //   component: Register
  // },
  // {
  //   name: 'halloffame',
  //   path: '/halloffame',
  //   component: HallofFame
  // },
  // {
  //   name: 'newpost',
  //   path: '/newpost',
  //   component: NewPost
  // },
  // Handle child routes with a default, by giving the name to the
  // child.
  // SO: https://github.com/vuejs/vue-router/issues/777
  // {
  //   path: '/@:username',
  //   component: Profile,
  //   // children: [
  //   //   {
  //   //     path: '',
  //   //     name: 'profile',
  //   //     component: () => import('@/views/ProfileArticles')
  //   //   },
  //   //   {
  //   //     name: 'profile-favorites',
  //   //     path: 'favorites',
  //   //     component: () => import('@/views/ProfileFavorited')
  //   //   }
  //   // ]
  // },
  // {
  //   name: 'article',
  //   path: '/articles/:slug',
  //   component: () => import('@/views/Article'),
  //   props: true
  // },
  // {
  //   name: 'article-edit',
  //   path: '/editor/:slug?',
  //   props: true,
  //   component: () => import('@/views/ArticleEdit')
  // }
]
}]
})
