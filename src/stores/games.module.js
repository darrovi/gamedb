import {db} from '@/firebase/init';
import moment from 'moment'

const state = {
    games: [],
    loadingGames: false,
    filter: {},
    filteredGames: [],
    currentGame: null
};

const getters = {
    all: (state) => state.games,
    loadingGames: (state) => state.loadingGames,
    filter: (state) => state.filter,
    hasFilter: (state) => Object.entries(state.filter).length !== 0 || state.filter.constructor !== Object,
    filtered: (state) => state.filteredGames,
    playing: (state) => state.games.filter(g => g.playing),
    currentGame: (state) => state.currentGame
};

const mutations = {
    SET_GAMES: (state, games) => {
        state.games = games;
        state.filteredGames = games;
    },
    RESET_GAMES: (state) => {
        state.games = [];
        state.filteredGames = [];
    },
    SET_CURRENT_GAME: (state, game) => {
        state.currentGame = game;
    },
    RESET_CURRENT_GAME: (state) => {
        state.currentGame = null;
    },
    FILTER_GAMES: (state, games) => {
        state.filteredGames = games;
    },
    SET_LOADING_GAMES: (state, loading) => {
        state.loadingGames = loading;
    },
    SET_FILTER: (state, filter) => {
        state.filter = filter;
    }
};

const actions = {
    getGames({commit}, userId) {
        commit('SET_LOADING_GAMES', true);
        let games = [];

        db.collection('games').where('userId', '==', userId).onSnapshot((snapshot) => {
            games = [];
            snapshot.forEach((doc) => {
                games.push({id: doc.id, ...doc.data()});
            });

            games = games.sort((a, b) => moment(String(b.updatedAt)).diff(moment(String(a.updatedAt))));

            commit('SET_GAMES', games);
            commit('SET_LOADING_GAMES', false);
        });
    },
    resetGames({commit}) {
        commit('RESET_GAMES')
    },
    setCurrentGame({commit}, id) {
        db.collection('games').doc(id).get().then((doc) => {
            const game = {id: doc.id, ...doc.data()};
            commit('SET_CURRENT_GAME', game);
        })
    },
    resetCurrentGame({commit}) {
        commit('RESET_CURRENT_GAME')
    },
    filterGames({commit, state}, filter) {
        let games;
        // Check if the object is empty
        if (Object.entries(filter).length === 0 && filter.constructor === Object) {
            games = state.games
        } else {
            games = state.games.filter((g) => {
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

        commit('FILTER_GAMES', games);
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
