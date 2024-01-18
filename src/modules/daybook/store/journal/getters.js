
// export const myGetter = ( state ) => {
//     return state
// }

export const getEntriesByterm = ( state ) => ( term ) => {
    
    if ( term.length === 0 ) return state.entries

    return state.entries.filter( entry => entry.text.toLowerCase().includes( term.toLowerCase() ) )

}

// Recibimos el id
export const getEntryById = ( state ) => ( id = '' ) => {
    // Lo guardamos en una variable, porque si retornamos directamente el resultado, 
    // lo mandaremos por referencia y si  luego queremos trabajar con ese resultado, 
    // estariamos modificando directamente el state, lo cual es algo que no debemos hacer desde los getters
    const entry = state.entries.find( entry => entry.id === id) 

    if (!entry) return

    return {...entry}
}