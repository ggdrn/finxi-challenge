import Vue from "vue";
import Router from "vue-router";
import { mainMiddleware } from '@/utils/router/';


Vue.use(Router);
const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			component: () => import("./layouts/Default.vue"),
			meta: { requireAuth: false }, // validação de autenticação
			children: [
				{
					path: "/",
					name: "intro",
					component: () => import("@/views/Intro.vue"),
				},
				{
					path: '/login',
					name: 'Login',
					component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue'),
				},
				{
					path: '/register',
					name: 'Register',
					component: () => import(/* webpackChunkName: "Login" */ '@/views/Register.vue'),
				},

			]
		},
		{
			path: "/",
			component: () => import("./layouts/Default.vue"),
			meta: { requireAuth: true }, // validação de autenticação
			children: [
				{
					path: "/dashboard",
					name: "Dashboard",
					component: () => import("@/views/Home.vue"),
				},
			]
		},

	]
});

// Middleware
router.beforeEach(async (to, from, next) => {
	mainMiddleware(to, from, next);
});


export default router;