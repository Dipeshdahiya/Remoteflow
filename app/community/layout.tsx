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
            <div className='p-5 flex flex-col mt-14 w-full'>
                {children}
            </div>
            {/* Footer at the bottom */}
            <div className="border-t-2 border-gray-300">
                <Footer />
            </div>
        </>
    )
}
