import { computed } from "vue"
import { useStore } from "vuex"

const useAuth = () => {

    const store = useStore()

    const createUser = async ( user ) => {
        const resp = await store.dispatch('auth/createUser', user)
        return resp
    }

    const loginUser = async ( user ) => {
        const resp = await store.dispatch('auth/signInUser', user)
        return resp
    }   

    const checkAuthStatus = async () => {
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }

    const logout = () => {
        store.commit('journal/clearEntries')
        store.commit('auth/logout')
    }

    return {
        createUser, 
        loginUser,
        checkAuthStatus,
        logout,

        authStatus: computed(() => {
            return store.getters['auth/currentState']
        }),

        username: computed(() => {
            return store.getters['auth/username']
        })
    }

} 

export default useAuth