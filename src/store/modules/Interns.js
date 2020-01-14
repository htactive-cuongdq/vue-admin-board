import localStore from "../../common/localStore";
// import router from '../../router/index'
import { RepositoryFactory } from "../../API/RepositoryFactory";
const InternRepository = RepositoryFactory.get("intern");

const state = {
    loading: false,
    // error: null,
    totalInternActive: 0,
    internActive: [],
    options: {},
    filter: {
        startDate: "",
        endDate: "",
        full_name: "",
        phoneNumber: "",
        email: "",
        username: ""
    }
};

const getters = {
    loading(state) {
        return state.loading
    },
    // error(state) {
    //   return state.error
    // },
    totalInternActive(state) {
        return state.totalInternActive
    },
    internActive(state) {
        return state.internActive
    },

    options(state) {
        return state.options
    },
    filter(state) {
        return state.filter
    }
};

const mutations = {
    setLoading(state, payload) {
        state.loading = payload
    },
    // setError(state, payload) {
    //   state.error = payload
    // },
    // clearError(state) {
    //   state.error = null
    // },
    setTotalInternActive(state, payload) {
        state.totalInternActive = payload
    },
    setInternActive(state, payload) {
        state.internActive = payload
    },

    setOptions(state, payload) {
        state.options = payload
    },
    setFilter(state, payload) {
        console.log("payload-send", payload);
        state.filter = payload
    },
    clearFilter(state) {
        state.filter = {
            startDate: "",
            endDate: "",
            full_name: "",
            phoneNumber: "",
            email: "",
            username: ""
        }
    }
};

const actions = {
    // clearError({ commit }) {
    //   commit('clearError')
    // },
    async fetchInternActive({ commit, state }) {
        commit('setLoading', true)
        const { sortBy, sortDesc, page, itemsPerPage } = state.options;
        const body = {
            blocked: false,
            sort: {
                [sortBy[0]]: sortDesc[0] ? -1 : 0
            },
            filter: {
                startDate: (state.filter.startDate) ? new Date(state.filter.startDate).toISOString() : '',
                endDate: (state.filter.endDate) ? new Date(state.filter.endDate).toISOString() : '',
                full_name: state.filter.full_name,
                phoneNumber: state.filter.phoneNumber,
                email: state.filter.email,
                username: state.filter.username
            },
            pagination: {
                pageSize: itemsPerPage === -1 ? state.totalInternActive : itemsPerPage,
                page: page
            }
        };
        const data = await InternRepository.getAllUsers(body, localStore.headerBearerToken())
        commit('setLoading', false)
        commit('setInternActive', data.results)
        commit('setTotalInternActive', data.count)
    },

    async fetchInternBlock({ commit, state }) {
        commit('setLoading', true)
        const { sortBy, sortDesc, page, itemsPerPage } = state.options;
        const body = {
            blocked: true,
            sort: {
                [sortBy[0]]: sortDesc[0] ? -1 : 0
            },
            filter: {
                startDate: (state.filter.startDate) ? new Date(state.filter.startDate).toISOString() : '',
                endDate: (state.filter.endDate) ? new Date(state.filter.endDate).toISOString() : '',
                full_name: state.filter.full_name,
                phoneNumber: state.filter.phoneNumber,
                email: state.filter.email,
                username: state.filter.username
            },
            pagination: {
                pageSize: itemsPerPage === -1 ? state.totalInternBlock : itemsPerPage,
                page: page
            }
        };
        const data = await InternRepository.getAllUsers(body, localStore.headerBearerToken())
        commit('setLoading', false)
        commit('setInternActive', data.results)
        commit('setTotalInternActive', data.count)
    }


}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}