import { createStore } from 'vuex'

import journal from '../modules/daybook/store/journal'
import auth from '../modules/auth/store'

const store = createStore({
    //seria algo como journal: journal, pero en ecmascript 6 si tiene el mismo nombre podemos resumirlo
    modules: {
        auth,
        journal
    } 
})

export default store