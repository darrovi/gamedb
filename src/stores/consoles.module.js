import {db} from '@/firebase/init';
import moment from 'moment'

const state = {
    consoles: [],
    loadingConsoles: false,
    currentConsole: null
};

const getters = {
    all: (state) => state.consoles,
    loadingConsoles: (state) => state.loadingConsoles,
    currentConsole: (state) => state.currentConsole
};

const mutations = {
    SET_CONSOLES: (state, consoles) => {
        state.consoles = consoles;
    },
    RESET_CONSOLES: (state) => {
        state.consoles = [];
    },
    SET_CURRENT_CONSOLE: (state, console) => {
        state.currentConsole = console;
    },
    RESET_CURRENT_CONSOLE: (state) => {
        state.currentConsole = null;
    },
    SET_LOADING_CONSOLES: (state, loading) => {
        state.loadingConsoles = loading;
    }
};

const actions = {
    getConsoles({commit}, userId) {
        commit('SET_LOADING_CONSOLES', true);
        let consoles = [];

        db.collection('consoles').where('userId', '==', userId).onSnapshot((snapshot) => {
            consoles = [];
            snapshot.forEach((doc) => {
                consoles.push({id: doc.id, ...doc.data()});
            });

            consoles = consoles.sort((a, b) => moment(String(b.updatedAt)).diff(moment(String(a.updatedAt))));

            commit('SET_CONSOLES', consoles);
            commit('SET_LOADING_CONSOLES', false);
        });
    },
    resetConsoles({commit}) {
        commit('RESET_CONSOLES')
    },
    setCurrentConsole({commit}, id) {
        db.collection('consoles').doc(id).get().then((doc) => {
            const console = {id: doc.id, ...doc.data()};
            commit('SET_CURRENT_CONSOLE', console);
        })
    },
    resetCurrentConsole({commit}) {
        commit('RESET_CURRENT_CONSOLE')
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
