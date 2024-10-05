import React from 'react';

const NotesTable = async ({ query, currentPage }: {
    query: string;
    currentPage: number;
}) =>{
    // const notes = await fetchFilteredNotes(query, currentPage);
    return (
        <div>
            {/* {notes.map((note) => (
                <Note key={note.id} title={note.title} desc={note.desc} preview={note.preview}/>
            ))} */}
        </div>
    )
}

export default NotesTable;