import {db} from '@/firebase/init';
import moment from 'moment'

const state = {
    games: [],
    filter: {},
    filteredGames: [],
    currentGameId: null
};

const getters = {
    all: (state) => state.games,
    filter: (state) => state.filter,
    filtered: (state) => state.filteredGames,
    playing: (state) => state.games.filter(g => g.playing),
    currentGame: (state) => state.games.find(g => g.id === state.currentGameId)
};

const mutations = {
    GET_GAMES: (state, userId) => {
        let games = [];

        db.collection('games').where('userId', '==', userId).onSnapshot((snapshot) => {
            games = [];
            snapshot.forEach((doc) => {
                games.push({id: doc.id, ...doc.data()});
            });

            games = games.sort((a, b) => moment(String(b.updatedAt)).diff(moment(String(a.updatedAt))));

            state.games = games;
            state.filteredGames = games;
        });
    },
    RESET_GAMES: (state) => {
        state.games = [];
        state.filteredGames = [];
    },
    FILTER_GAMES: (state, filter) => {
        // Check if the object is empty
        if (Object.entries(filter).length === 0 && filter.constructor === Object) {
            state.filteredGames = state.games
        } else {
            state.filteredGames = state.games.filter((g) => {
                // Check all the filters one by one, and if it doesn't match return false. If all of them matches return true
                if (filter.name) {
                    if (!g.name.toUpperCase().includes(filter.name.toUpperCase())) {
                        return false;
                    }
                }

                if (filter.playing) {
                    if (!g.playing) {
                        return false;
                    }
                }

                if (filter.notPlaying) {
                    if (g.playing) {
                        return false;
                    }
                }

                if (filter.finished) {
                    if (!g.completed) {
                        return false;
                    }
                }

                if (filter.notFinished) {
                    if (g.completed) {
                        return false;
                    }
                }

                const releaseDateTo = moment(filter.releaseDateTo, 'YYYY-MM-DD').format();
                if (releaseDateTo) {
                    if (!g.releaseDate) {
                        return false;
                    }

                    if (moment(releaseDateTo).isBefore(g.releaseDate)) {
                        return false;
                    }
                }

                const releaseDateFrom = moment(filter.releaseDateFrom, 'YYYY-MM-DD').format();
                if (releaseDateFrom) {
                    if (!g.releaseDate) {
                        return false;
                    }

                    if (moment(releaseDateFrom).isAfter(g.releaseDate)) {
                        return false;
                    }
                }

                return true
            })
        }
    },
    SET_CURRENT_GAME: (state, id) => {
        state.currentGameId = id
    },
    SET_FILTER: (state, filter) => {
        state.filter = filter;
    }
};

const actions = {
    getGames({commit}, userId) {
        commit('GET_GAMES', userId)
    },
    resetGames({commit}) {
        commit('RESET_GAMES')
    },
    filterGames({commit}, filter) {
        commit('FILTER_GAMES', filter)
    },
    setCurrentGame({commit}, id) {
        commit('SET_CURRENT_GAME', id)
    },
    setFilter({commit}, filter) {
        commit('SET_FILTER', filter);
        this.dispatch('games/filterGames', filter, {root: true});
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
