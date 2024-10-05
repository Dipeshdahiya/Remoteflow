import type { Metadata } from 'next'
import Navbar from "@/components/navbar/navbar";
import { Suspense } from 'react';
import PreLoader from '@/components/loadingscreen';
import Footer from "@/components/footer";


export const metadata: Metadata = {
    title: {
        template: 'Community | %s',
        default: 'Community',
    },
    description: 'Bird - Simple and powerful notes & docs for teams',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            <Suspense fallback={<PreLoader />}>
                <div className='p-5 flex-col'>
                    {children}
                </div>
            </Suspense>
            <Footer/>
        </>
    )
}
