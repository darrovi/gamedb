import {db} from '@/firebase/init';
import firebase from 'firebase'
import moment from "moment";

const state = {
    friends: [],
    currentFriendId: '',
    currentFriendGames: []
};

const getters = {
    friends: (state) => state.friends,
    currentFriend: (state) => {
        const friend = state.friends.find(f => f.id === state.currentFriendId);
        if (friend) friend['games'] = state.currentFriendGames;
        return friend;
    }
};

const mutations = {
    GET_FRIENDS: (state, friends) => {
        state.friends = friends;
    },
    RESET_FRIENDS: (state) => {
        state.friends = [];
    },
    SET_CURRENT_FRIEND: (state, id) => {
        state.currentFriendId = id;
        const friend = state.friends.find(f => f.id === id);

        // Get the friend games
        let games = [];

        if (friend) {
            db.collection('games').where('userId', '==', friend.userId).onSnapshot((snapshot) => {
                games = [];
                snapshot.forEach((doc) => games.push({id: doc.id, ...doc.data()}));
                state.currentFriendGames = games.sort((a, b) => moment(String(b.updatedAt)).diff(moment(String(a.updatedAt))));
            });
        }
    }
};

const actions = {
    getFriends({commit}, ids) {
        let friends = [];

        if (ids && ids.length) {
            const promises = [];

            for (const id of ids) {
                promises.push(db.collection('users').doc(id).get().catch());
            }

            Promise.all(promises).then((friendDocs) => {
                const imagesPromise = [];

                for (const friendDoc of friendDocs) {
                    if (friendDoc && friendDoc.data()) {
                        const friend = {id: friendDoc.id, ...friendDoc.data()};
                        friends.push(friend);
                        imagesPromise.push(firebase.storage().ref('users/' + friend.imageRef).getDownloadURL())
                    }
                }

                Promise.all(imagesPromise).then((urls) => {
                    for (let i = 0; i < friends.length; i++) {
                        friends[i].image = urls[i]
                    }
                    friends = friends.sort((a, b) => a - b);
                    commit('GET_FRIENDS', friends)
                });
            })
        }
    },
    resetFriends({commit}) {
        commit('RESET_FRIENDS')
    },
    setCurrentFriend({commit}, id) {
        commit('SET_CURRENT_FRIEND', id)
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
