export const addNewNote = (value) => {
    return { type: 'TODO_ADD', payload: value }
}

export const removeNote = (value) => {
    return { type: 'TODO_REMOVE', payload: value }
}

export export const editNote = (value) => {
    return { type: 'TODO_EDIT', payload: value }
}


export const fetchNoteList = (value) => {
    return { type: 'TODO_FETCH', payload: value }
}


