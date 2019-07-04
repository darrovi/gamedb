const state = {
    loading: false
};

const getters = {
    isLoading: (state) => state.loading
};

const mutations = {
    start: (state) => state.loading = true,
    stop: (state) => state.loading = false
};

export default {
    namespaced: true,
    state,
    getters,
    mutations
};
