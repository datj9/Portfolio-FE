import axios from "axios";
const apiURL = "https://api-datng.herokuapp.com";
const token = localStorage.getItem('token');

const state = {
    isLoading: false,
    projects: [],
    imageUrl: '',
};

const getters = {
    allProjects: state => state.projects,
    isLoading: state => state.isLoading,
    imageUrl: state => state.imageUrl,
};

const actions = {
    async fetchProjects({ commit }) {
        commit("setLoading", true);
        const res = await axios.get(`${apiURL}/api/projects`)
        commit('setProjects', res.data)
        commit('setLoading', false)
    },
    async uploadImage({ commit }, file) {
        const formData = new FormData()
        formData.append('projectImage', file)
        const res = await axios.post(`${apiURL}/api/projects/upload`, formData, {
            headers: {
                'content-type': 'multipart/form-data',
                token
            }
        })
        commit('setImageUrl', res.data.imageUrl)
    },
    async addNewProject({ commit }, data) {
        const res = await axios.post(`${apiURL}/api/projects`, data, {
            headers: {
                token
            }
        });
        commit('addNewProject', res.data.project)
    }
};

const mutations = {
    setProjects: (state, projects) => (state.projects = projects),
    setLoading: (state, isLoading) => (state.isLoading = isLoading),
    setImageUrl: (state, url) => (state.imageUrl = url),
    addNewProject: (state, project) => (state.projects.concat(project)),
};

export default {
    state,
    getters,
    actions,
    mutations
};
