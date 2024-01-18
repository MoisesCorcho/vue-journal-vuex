
// export const myMutation = ( state ) => {

// }

export const setEntries = ( state, entries ) => {
    state.entries = [...state.entries, ...entries]
    state.isLoading = false
}

export const updateEntry = ( state, entry ) => {

    const idx = state.entries.map(e => e.id).indexOf(entry.id)
    state.entries[idx] = entry

    // De la forma en que yo lo habia hecho.
    // for (let i = 0; i < state.entries.length; i++) {
    //     if (state.entries[i].id === entry.id) {
    //         state.entries[i] = entry
    //     }
    // }
}

export const addEntry = ( state, entry ) => {
    state.entries.unshift(entry)
}

export const removeEntry = ( state, id ) => {
    const idx = state.entries.map(e => e.id).indexOf(id)
    state.entries.splice(idx, 1)
}

export const clearEntries = ( state ) => {
    state.entries = []
}
