import React from "react";
import Link from 'next/link';

const Note = ({ title, author, desc, preview }: {
    title: string;
    author: string;
    desc: string;
    preview: string;
}) => {
    return (
        <div className="flex flex-col md:flex-row border border-gray-200 dark:border-gray-600 rounded-xl w-full h-auto md:h-60 mt-4">
            {/* Image Section */}
            <div className="w-full md:w-1/3 h-50 md:h-full">
                <Link
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="block w-full h-full rounded-xl overflow-hidden"
                >
                    <img
                        src={preview}
                        className="object-cover w-full h-full"
                        alt={title}
                    />
                </Link>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-2/3 p-4 flex flex-col">
                <div className="flex flex-col justify-center align-baseline h-10 mb-2">
                    <h1 className="text-lg md:text-xl font-semibold">{title}</h1>
                    <Link
                        href={`/user/${author}`}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <code className="text-sm md:text-lg hover:text-gray-500 text-blue-500">@{author}</code>
                    </Link>
                </div>
                <div className="text-sm md:text-base">
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Note;
