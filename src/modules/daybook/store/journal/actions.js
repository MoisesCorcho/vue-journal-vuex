
// export const myAction = async ( { commit } ) => {

// }

import journalApi from "@/api/journalApi"

export const loadEntries = async ( { commit } ) => {

    const { data } = await journalApi.get('/entries.json')
    
    if ( !data ) {
        commit('setEntries', [])
        return
    }

    const entries = []
    for( let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)

}

export const updateEntrie = async ( { commit }, entry ) => {

    //Guardamos el id
    const id = entry.id
    //Borramos la propiedad id del objeto entry
    delete entry.id
    
    //Hacemos la peticion put
    const res = await journalApi.put('/entries/'+id+'.json', entry)
    console.log(res);

    //Ingresamos la propiedad id al objeto entry
    entry.id = id

    commit('updateEntry', {...entry})

}

export const createEntry = async ( { commit }, entry ) => {

    const {data} = await journalApi.post('/entries.json', entry)
    entry.id = data.name

    commit('addEntry', entry)

    return entry
}

export const deleteEntry = async ( { commit }, id ) => {

    await journalApi.delete(`/entries/${id}.json`)
    commit('removeEntry', id)

    return id
}