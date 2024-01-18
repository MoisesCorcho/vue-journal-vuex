import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyCVmqMUmAlPXI5FHwD2Q00an4da0Ioc2v0'
    }
})

export default authApi