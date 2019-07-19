import firebase from 'firebase'
import {db} from '@/firebase/init';

const state = {
    user: null
};

const getters = {
    user: (state) => state.user,
    userId: (state) => state.user.userId
};

const mutations = {
    SET_USER: (state, user) => {
        state.user = user
    },
    LOGOUT: (state) => {
        state.user = null;
        firebase.auth().signOut();
    }
};

const actions = {
    setUser({commit}, userId) {
        db.collection('users').where('userId', '==', userId).onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
                this.user = {id: doc.id, ...doc.data()};

                if (this.user.friends && this.user.friends.length) {
                    firebase.storage().ref('users/' + this.user.imageRef).getDownloadURL().then((url) => {
                        this.user.image = url;
                    });

                    const promises = [];

                    for (const friend of this.user.friends) {
                        promises.push(db.collection('users').doc(friend).get().catch());
                    }

                    Promise.all(promises).then((friendDocs) => {
                        const friendsInfo = [];
                        const imagesPromise = [];

                        for (const friendDoc of friendDocs) {
                            if (friendDoc && friendDoc.data()) {
                                const friend = {id: friendDoc.id, ...friendDoc.data()};
                                friendsInfo.push(friend);
                                imagesPromise.push(firebase.storage().ref('users/' + friend.imageRef).getDownloadURL())
                            }
                        }
                        this.user.friends = friendsInfo;

                        Promise.all(imagesPromise).then((urls) => {
                            for (let i = 0; i < friendsInfo.length; i++) {
                                friendsInfo[i].image = urls[i]
                            }
                            commit('SET_USER', this.user);
                        });
                    })
                } else {
                    firebase.storage().ref('users/' + this.user.imageRef).getDownloadURL().then((url) => {
                        this.user.image = url;
                        commit('SET_USER', this.user);
                    });
                }
            });
        });
    },
    logout({commit}) {
        commit('LOGOUT')
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
