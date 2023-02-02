import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue'),
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('../views/HomeView.vue'),
	},
	{
		path: '/EventBus',
		name: 'EventBus',
		component: () => import('../views/EventBus.vue'),
	},
	{
		path: '/router',
		name: 'router',
		component: () => import('../views/router.vue'),
	},
	{
		path: '/router1',
		name: 'router1',
		component: () => import('../views/router1.vue'),
	},
	{
		path: '/ref',
		name: 'ref',
		component: () => import('../views/ref.vue'),
	},
	{
		path: '/provide',
		name: 'provide',
		component: () => import('../views/provide.vue'),
	},
	{
		path: '/GrandParent',
		name: 'GrandParent',
		component: () => import('../views/GrandParent.vue'),
	},
	{
		path: '/vuex',
		name: 'vuex',
		component: () => import('../views/vuex.vue'),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
