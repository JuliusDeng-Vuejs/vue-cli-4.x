import Vue from 'vue';
import VueRouter from 'vue-router'

import home from './home.vue';
import about from './about.vue';

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
		{
			path: '/home',
			component: home
		},
		{
			path: '/abouta:id',
			component: about
		},
		{
			path: '/',
			redirect: '/home' 
		}
	]
})

export default router;