import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			component: () => import("./layouts/Default.vue"),
			children: [
				{
					path: "/",
					name: "home",
					component: () => import("./views/Home.vue"),
				},
			]
		}
	]
})

export default router;