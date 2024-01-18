import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-a8475-default-rtdb.firebaseio.com'
})

//Mandamos en los query parameters el idToken que nos genera firebase para autenticarnos y poder hacer peticiones 
journalApi.interceptors.request.use( (config) => {

    config.params = {
        auth: localStorage.getItem('idToken')
    }

    /**
     * Si el backend pidiese el token en los headers (Como es el caso de veca) seria algo como:
     * config.headers = {
     *  'authorization': 'bearer idToken'
     * }
     */
    return config
})

export default journalApi