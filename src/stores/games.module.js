import {db} from '@/firebase/init';

const state = {
    games: [],
    filteredGames: [],
    currentGameId: null
};

const getters = {
        all: (state) => state.games,
        filtered: (state) => state.filteredGames,
        playing: (state) => state.games.filter(g => g.playing),
        currentGame: (state) => state.games.find(g => g.id === state.currentGameId)
    }
;

const mutations = {
    GET_GAMES: (state) => {
        let games = [];
        db.collection('games').orderBy('updatedAt', "desc").onSnapshot((snapshot) => {
            games = [];
            snapshot.forEach((doc) => {
                games.push({id: doc.id, ...doc.data()})
            });

            state.games = games;
            state.filteredGames = games;
        });
    },
    FILTER_GAMES: (state, filter) => {
        // Check if the object is empty
        if (Object.entries(filter).length === 0 && filter.constructor === Object) {
            state.filteredGames = state.games
        } else {
            state.filteredGames = state.games.filter((g) => g.name.toUpperCase().includes(filter.name.toUpperCase()))
        }
    },
    SET_CURRENT_GAME: (state, id) => {
        state.currentGameId = id
    }
};

const actions = {
    getGames({commit}) {
        commit('GET_GAMES')
    },
    filterGames({commit}, filter) {
        commit('FILTER_GAMES', filter)
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
