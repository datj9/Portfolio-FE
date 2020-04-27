import axios from "axios";
const apiURL = "https://api-datng.herokuapp.com";
const state = {
    message: null,
    token: "",
    isAuthenticated: false
};

const getters = {
    message: state => state.message,
    token: state => state.token,
    isAuthenticated: state => state.isAuthenticated
};

const actions = {
    async signin({ commit }, { email, password }) {
        try {
            const res = await axios.post(`${apiURL}/api/users/signin`, { email, password });
            const { data: { token } = {} } = res;
            localStorage.setItem("token", token);
            commit("setAuthenticate", true);
            commit("setMessage", "success");
        } catch (err) {
            localStorage.removeItem("token");
        }
    }
};

const mutations = {
    setMessage: (state, message) => (state.message = message),
    setToken: (state, token) => (state.token = token),
    setAuthenticate: (state, authenticated) => (state.isAuthenticated = authenticated)
};

export default {
    state,
    getters,
    actions,
    mutations
};
