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
        db.collection('users').where('userId', '==', userId).get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    this.user = {id: doc.id, ...doc.data()};
                    firebase.storage().ref('users/' + this.user.imageRef).getDownloadURL().then((url) => {
                        this.user.image = url;
                        commit('SET_USER', this.user)
                    })
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
