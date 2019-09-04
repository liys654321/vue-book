import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Vuextest from '@/components/Vuextest'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
		  {
				  path: '/home',
				  name: 'Home',
				  component: Home,
				  redirect: '/index',
				  children: [
						  {
						  		path: '/index',
								  name: 'index',
								  component: Index,
								  meta: {
						  				requireAuth: true
								  }
						  }
				  ]
		  },
  	
		{
		  path: '/login',
		  name: 'Login',
		  component: Login
		},
  
		{
				path: '/vuextest',
				name: 'vuextest',
				component: Vuextest
		}
  ]
})
