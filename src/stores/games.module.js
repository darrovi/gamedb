import {db} from '@/firebase/init';

const state = {
    games: [],
    currentGameId: null
};

const getters = {
    all: (state) => state.games,
    currentGame: (state) => state.games.find(g => g.id === state.currentGameId)
};

const mutations = {
    GET_GAMES: (state) => {
        let games = [];
        db.collection('games').onSnapshot((snapshot) => {
            games = [];
            snapshot.forEach((doc) => {
                games.push({id: doc.id, ...doc.data()})
            });

            state.games = games;
        });
    },
    SET_CURRENT_GAME: (state, id) => {
        state.currentGameId = id
    }
};

const actions = {
    getGames({commit}) {
        commit('GET_GAMES')
    },
    setCurrentGame({commit}, id) {
        commit('SET_CURRENT_GAME', id)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
