import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signin from "../views/Signin.vue";
import store from "../store";
Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
	console.log(store.getters.isAuthenticated);
	if (!store.getters.isAuthenticated) {
		next();
		return;
	}
	next("/");
};
//TODO

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: About
	},
	{
		path: "/signin",
		name: "Signin",
		component: Signin,
		beforeEnter: ifNotAuthenticated
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
