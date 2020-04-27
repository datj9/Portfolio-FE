import axios from "axios";
const apiURL = "https://api-datng.herokuapp.com";

const state = {
    isLoading: false,
    projects: []
};

const getters = {
    allProjects: state => state.projects,
    isLoading: state => state.isLoading
};

const actions = {
    async fetchProjects({ commit }) {
        commit("setLoading", true);
        const res = await axios.get(`${apiURL}/api/projects`)
        commit('setProjects', res.data)
        commit('setLoading', false)
    }
};

const mutations = {
    setProjects: (state, projects) => (state.projects = projects),
    setLoading: (state, isLoading) => (state.isLoading = isLoading)
};

export default {
    state,
    getters,
    actions,
    mutations
};
