import axios from "axios"
export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },
    getters: {
        authenticated(state) {
            return state.token && state.user
        },
        user(state) {
            return state.user
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },
        SET_USER(state, user) {
            state.user = user
        }

    },
    actions: {
        async signUp({
            dispatch
        }, payload) {
            let response = await axios.post('api/auth/register', payload);
            console.log(response.data.token)
            return dispatch('attempt', response.data.token)

        },
        async sendOtp({
            dispatch
        }, payload) {
            let response = await axios.post('api/auth/verifyphone', payload);
            return dispatch('attempt', response)
        },

        async sendEmail({
            dispatch
        }, payload) { // let response =  await axios.post('api/sendresetcode',payload);

            return new Promise((resolve, reject) => {
                axios.post('api/sendresetcode', payload).then((response) => {
                    resolve(response)
                    dispatch('')
                }).catch((err) => {
                    reject(err)
                })

            })
        },
        async confirmpasswordbyemail({
            dispatch
        }, payload) { // let response =  await axios.post('api/sendresetcode',payload);

            return new Promise((resolve, reject) => {
                axios.post('api/resetpasswordwithcode', payload).then((response) => {
                    resolve(response)
                    dispatch('')
                }).catch((err) => {
                    reject(err)
                })

            })
        },
        async verifyemail({
            dispatch
        }, payload) { // let response =  await axios.post('api/sendresetcode',payload);

            return new Promise((resolve, reject) => {
                axios.post('api/auth/verifyemail', payload).then((response) => {
                    resolve(response)
                    dispatch('')
                }).catch((err) => {
                    reject(err)
                })

            })
        },
        async confirmcodeemail({
            dispatch
        }, payload) { // let response =  await axios.post('api/sendresetcode',payload);

            return new Promise((resolve, reject) => {
                axios.post('api/auth/confirm_email', payload).then((response) => {
                    resolve(response)
                    dispatch('')
                }).catch((err) => {
                    reject(err)
                })

            })
        },
        async confirmCode({
            dispatch
        }, payload) {
            let response = await axios.post('api/auth/verifyemail', payload);
            return dispatch('attempt', response)
        },
        async sendCode({
            dispatch
        }, payload) {
            let response = await axios.post('api/auth/confirm_phone', payload);
            return dispatch('attempt', response)
        },

        async signIn({
            dispatch
        }, payload) {
            return new Promise((resolve, reject) => {
                axios.post('api/auth/login', payload).then((response) => {
                    resolve(response)
                    dispatch('attempt', response.data.token)
                }).catch((err) => {
                    reject(err)
                })

            })


        },

        async attempt(
            {
                commit,
                state
            },
            token
        ) {
            if (token) {
                commit('SET_TOKEN', token)

            }
            if (!state.token) {
                return
            }

            try {
                let response = await axios.get('api/getdatils')
                commit('SET_USER', response.data.data)

            } catch (e) {
                console.log(e)
                commit('SET_TOKEN', null),
                commit('SET_USER', null)

            }

        },
        async signOut({commit}) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)
        }
    }
}
