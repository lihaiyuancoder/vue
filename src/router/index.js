/*
 * @Description: 
 * @Autor: lihaiyuan
 * @Email: lihaiyuan@goldenfintech.com.cn
 * @Date: 2020-02-07 20:16:49
 */
import Vue from 'vue'
import Router from 'vue-router'
//导入组件
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
//路由懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile =() => import('../components/Profile')

//通过vue.use(插件),安装插件，
Vue.use(Router)

export default new Router({ 
  //routes配置路由和组件之间的映射关系
  routes: [{
      path: '/',
      redirect: '/Home' //重定向
    },
    {
      path: '/Home',
      component: Home,
      children: [
        {
          path:'',
          redirect:'news'
        },
        {
          path: 'news',
          component: HomeNews

        },
        {
          path: 'message',
          component: HomeMessage
        }
      ]
    },
    {
      path: '/About',
      component: About
    },
    {
      path: '/User/:userId',
      component: User
    },
    {
      path :'/Profile',
      component:Profile
    },
  ],
  mode: 'history'
  // 如何将默认的hash模式改为history   mode:'history'
})
