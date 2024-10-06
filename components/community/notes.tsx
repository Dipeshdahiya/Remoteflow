import React from 'react';
import Note from '@/components/community/note';

// Placeholder data
// Should be removed after the fetchNotes function is being implemented
const notes = [
    {
        id: 1,
        title: 'Note 1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt alias minima ipsum accusamus, totam molestiae quod eaque ab officiis sed, veniam repellat fuga facilis! Maiores, repellendus sapiente amet omnis officia quibusdam cum unde, ab veritatis pariatur natus. Commodi, sint sunt!'
    },
    {
        id: 2,
        title: 'Note 2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt alias minima ipsum accusamus, totam molestiae quod eaque ab officiis sed, veniam repellat fuga facilis! Maiores, repellendus sapiente amet omnis officia quibusdam cum unde, ab veritatis pariatur natus. Commodi, sint sunt!'
    },
    {
        id: 3,
        title: 'Note 3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt alias minima ipsum accusamus, totam molestiae quod eaque ab officiis sed, veniam repellat fuga facilis! Maiores, repellendus sapiente amet omnis officia quibusdam cum unde, ab veritatis pariatur natus. Commodi, sint sunt!'
    },
    {
        id: 4,
        title: 'Note 4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt alias minima ipsum accusamus, totam molestiae quod eaque ab officiis sed, veniam repellat fuga facilis! Maiores, repellendus sapiente amet omnis officia quibusdam cum unde, ab veritatis pariatur natus. Commodi, sint sunt!'
    }
]

const NotesTable = async ({ query, currentPage }: {
    query: string;
    currentPage: number;
}) =>{
    // const notes = await fetchFilteredNotes(query, currentPage);
    return (
        <div className='w-full mt-3'>
            {notes.map((note) => (
                <Note 
                    key={note.id} 
                    title={note.title} 
                    author='codeza-ai'
                    desc={note.desc} 
                    preview="/images/pdf-placeholder.png"/>
            ))}
        </div>
    )
}

export default NotesTable;