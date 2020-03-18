import Vue from "vue";
import Vuex from "vuex";
// import users from "./modules/users";
// import projects from "./modules/projects";
import axios from "axios";
const apiURL = "https://api-datng.herokuapp.com/api";

Vue.use(Vuex);

export default new Vuex.Store({
	// modules: {
	// 	users,
	// 	projects
	// }
	state: {
		isLoading: false
	},
	getters: {},
	actions: {
		async signin({ commit }, { email, password }) {
			commit("setLoading", true);
			const res = await axios({
				baseURL: apiURL,
				url: `/users/signin`,
				method: "POST",
				data: { email, password },
				headers: { "content-type": "application/json" }
			});
			console.log(res);
		}
	},
	mutations: {}
});
