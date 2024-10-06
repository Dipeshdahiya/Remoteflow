import React from 'react';
import Search from '@/components/community/search';
import type { Metadata } from 'next';
// import { Suspense } from 'react';
import Pagination from '@/components/community/pagination';
import NotesTable from '@/components/community/notes';

export const metadata: Metadata = {
    title: 'Your Connected Workspace',
    description: 'Bird - Simple and powerful notes & docs for teams',
}

const ExploreNotes = async ({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) => {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    // const totalPages = await fetchNotesPages(query);

    return (
        <div className="w-full flex flex-col items-center gap-2">
            <div className='w-2/3 pt-2 pb-2 flex justify-center'>
                <h1 className='w-fit text-2xl font-semibold'>Explore Notes</h1>
            </div>
            <div className='w-2/3 p-5 flex flex-col items-center'>
                <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 w-full">
                    <Search placeholder="Search free notes..." />
                </div>
                {/* <Suspense key={query + currentPage} fallback={}>
                <NotesTable query={query} currentPage={currentPage} />
            </Suspense> */}
                    <NotesTable query={""} currentPage={currentPage} />
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={3} />
                </div>
            </div>
        </div>
    )
}

export default ExploreNotes;