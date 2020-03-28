import axios from "axios";
const apiURL = "https://api-datng.herokuapp.com";
const state = {
    isLoadingg: false,
    message: null,
    token: "",
    isAuthenticated: false
};

const getters = {
    isLoadingg: state => state.isLoadingg,
    message: state => state.message,
    token: state => state.token
};

const actions = {
    async signin({ commit }, { email, password }) {
        try {
            commit("setLoading", true);
            const res = await axios.post(`${apiURL}/api/users/signin`, { email, password });
            const { data: { token } = {} } = res;
            localStorage.setItem("token", token);
            commit("setAuthenticate", true);
            commit("setLoading", false);
            commit("setMessage", "success");
        } catch (err) {
            localStorage.removeItem("token");
        }
    }
};

const mutations = {
    setLoading: (state, isLoadingg) => (state.isLoadingg = isLoadingg),
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
