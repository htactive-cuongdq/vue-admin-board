import localStore from "../../common/localStore";
import { RepositoryFactory } from "../../API/RepositoryFactory";
const SalarysRepository = RepositoryFactory.get("salarys");
const state = {
    loading: false,
    totalSalarys: 0,
    Salarys: [],
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
    totalSalarys(state) {
        return state.totalSalarys
    },
    Salarys(state) {
        return state.Salarys
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
    setTotalSalarys(state, payload) {
        state.totalSalarys = payload
    },
    setSalarys(state, payload) {
        state.Salarys = payload
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
    async fetchSalarys({ commit, state }) {
        commit('setLoading', true)
        const { sortBy, sortDesc, page, itemsPerPage } = state.options;
        const body = {
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
                pageSize: itemsPerPage === -1 ? state.totalSalarys : itemsPerPage,
                page: page
            }
        };
        const data = await SalarysRepository.getAllUsers(body, localStore.headerBearerToken())
        commit('setLoading', false)
        commit('setSalarys', data.results)
        commit('setTotalSalarys', data.count)
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}