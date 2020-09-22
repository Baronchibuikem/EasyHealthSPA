import axios from "axios";
import route from "./backend_api_url";

const state = {
    // The keys defined below represents the initial state of our data the first time our app loads
    error: [],
    status: "",
    token: localStorage.getItem("token") || "",
    loggedIn: false,
    user: {
        id: "",
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        image: null,

    }
};

/* getters pull updated value from our state data's and they are then called by the components that needs them to
present data to the user(s) */
const getters = {
    // isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
    getUser: (state) => state.user,
    getToken: (state) => state.token,
    isAuthenticated: (state) => state.loggedIn,
    errorStatus: (state) => state.error,
};

// actions are mostly responsible for performing CRUD operations as allowed on the API endpoints being called
const actions = {

    // for getting the current token of a logged in user
    async getToken(){
         // config is used to set the authorization by getting the token of the the logged in user
         let config = {
            headers: {
                Authorization: `Token ${getters.getToken}`,
                // "Content-Type": "application/json"
            },
        }
        return config
    },

    // Login action
    async login({ commit, dispatch }, payload) {
        const { email, password } = payload
        try {
            const response = await route.post("login/", { email, password })
            console.log(response.data, "response from login action")
            if (response) {
                const token = response.data.token;
                const id = response.data.user;
                localStorage.setItem("token", token);
                axios.defaults.headers.common["Authorization"] = token;
                // commit("auth_success", { token, user });
                dispatch("getUser", {id,token });
            }
        } catch (error) {
            console.log(error, "ERROR MESSAGE")
        }
    },

    // Logout action
    async logout({commit}) {
        console.log("logout clicked in the vuex action")
        commit("auth_logout" )
    },


    async getUser({ commit, getters }, payload) {
        try {
            const response = await route.get(`user/${payload.id}/`, payload.token)
            console.log(response.data, "from getuser action")
            if (response) {
                commit("update_user", response.data)
            }
        } catch (error) {
            console.log(error)
        }

    },


}

// These are used to update our state depending on the response gotten when an action is dispatched
const mutations = {
    auth_request(state) {
        state.status = "loading";
    },

    auth_logout(state) {
        state.loggedIn = false,
        state.token = localStorage.removeItem("token")
    },

    auth_success(state, payload) {
        const { token, pk } = payload;
        state.status = "success";
        state.loggedIn = true;
        state.token = token;
        state.user.id = pk;
    },

    auth_error(state, payload) {
        const {
            data
        } = payload;
        state.status = "Try Again";
        state.isLoading = false;
        state.error = data;
    },

    logout(state) {
        state.status = "";
        state.token = "";
    },

    update_user(state, payload) {
        const { ...user } = payload;
        state.user = user;
        state.loggedIn = true
    },
    /* Used to update the states which are perculiar for display data specific to a user or userprofile
    Since the the payload contains a user object, while destructing the payload, we use spread operator
    to get the keys in the user object */



};



export default {
    state,
    getters,
    actions,
    mutations,
    // config
};