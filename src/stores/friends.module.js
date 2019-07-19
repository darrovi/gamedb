import {db} from '@/firebase/init';
import firebase from 'firebase'

const state = {
    friends: [],
    currentFriendId: ''
};

const getters = {
    friends: (state) => state.friends
};

const mutations = {
    GET_FRIENDS: (state, friends) => {
        state.friends = friends;
    },
    RESET_FRIENDS: (state) => {
        state.friends = [];
    },
    SET_CURRENT_FRIEND: (state, id) => {
        state.currentFriendId = id
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
