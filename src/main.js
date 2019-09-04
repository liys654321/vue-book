// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store'
Vue.config.productionTip = false

Vue.use(ElementUI,{ size: 'small', zIndex: 300 })

axios.default.baseURL = 'http://localhost:9093/api'
Vue.prototype.$http = axios;

router.beforeEach((to,from,next) => {
		if(to.meta.requireAuth) {
				
				if(store.state.user.username) {
						next()
				}else {
						next({
								path: 'login',
								query: {redirect: to.fullPath}
						})
				}
				
				
		}else {
				next()
		}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
