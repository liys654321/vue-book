import Vue from 'vue'// 引入vue
import Vuex from 'vuex'// 引入vuex

// 使用vuex
Vue.use(Vuex);

// 创建vuex实例
const store = new Vuex.Store( {
		state: {
				user: {
						username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(
								window.localStorage.getItem('user' || '[]')).username
				}
		},
		mutations: {
				login(state,user) {
						state.user = user
						window.localStorage.setItem('user',JSON.stringify(user))
				}
		}
} )

export default store // 导出store
