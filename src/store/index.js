import { createStore } from 'vuex'

import journal from '../modules/daybook/store/journal'

const store = createStore({
    //seria algo como journal: journal, pero en ecmascript 6 si tiene el mismo nombre podemos resumirlo
    modules: {
        journal
    } 
})

export default store