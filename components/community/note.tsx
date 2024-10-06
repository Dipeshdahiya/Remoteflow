import React from "react";
import Image from 'next/image';
import Link from 'next/link';

const Note = ({ title, author, desc, preview}: {
    title: string;
    author : string;
    desc: string;
    preview: string;
}) =>{
    return (
        <div className="flex border border-gray-200 rounded-xl w-full h-60 mt-4">
            <div className="w-1/3 h-full">
                <Link className='w-full rounded-xl'
                        href="/"
                        rel="noopener noreferrer" 
                        target="_blank">
                    <img
                        src={preview}
                        className="w-full h-full rounded-xl"
                        alt={title}
                    />
                </Link>
            </div>
            <div className="w-2/3 p-4 flex flex-col h-full items-baseline">
                <div className="h-1/3">
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <Link 
                        href ={`/user/${author}`}
                        rel="noopener noreferrer"
                        target="_blank"
                    ><code className="text-lg hover:text-gray-500 text-blue-500">@{author}</code></Link>
                </div>
                <div className="h-2/3 p-2">
                    <p className="text-sm">{desc}</p>
                </div>
            </div>
        </div>
    )
};

export default Note;