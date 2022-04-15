const localhostServer = "http://localhost:3000/"
export const API = {
    notes: {
        note_list:'/api/notes',
        new_note: '/api/notes',
        edit: '/api/notes/:notesId',
        delete: '/api/notes/:notesId',

    }
    ,
    archive_notes: {
        new_archive: '/api/notes/archives/:noteId',
        archive_list : '/api/archives',
        restore_note: '/api/archives/restore/:noteId',
        delete :'/api/archives/delete/:noteId',


    }
}