import React from 'react';
import Search from '@/components/community/search';
import type { Metadata } from 'next';
// import { Suspense } from 'react';
// import Pagination from '@/components/community/pagination';

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
}) =>{
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    // const totalPages = await fetchNotesPages(query);

    return (
        <div>
            <h1>Explore Notes</h1>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search invoices..." />
            </div>
            {/* <Suspense key={query + currentPage} fallback={}>
                <NotesTable query={query} currentPage={currentPage} />
            </Suspense> */}
            <div className="mt-5 flex w-full justify-center">
                {/* <Pagination totalPages={totalPages} /> */}
            </div>
        </div>
    )
}

export default ExploreNotes;