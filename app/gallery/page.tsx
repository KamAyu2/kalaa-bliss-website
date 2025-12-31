//gallery/page.tsx

import ClientGallery from "./clientgallery";
import { Italianno } from "next/font/google";

const italianno = Italianno({
    subsets: ['latin'],
    weight: '400',
});
export default function Gallery() {

    return (
        <div>
            <div className="items-center flex flex-col p-12">
                <h1 className={`${italianno.className} text-6xl md:text-7xl mb-4 `}> Gallery </h1>
                <p className='text-2xl text-gray-600 hidden'>A Showcase of my work</p>
            </div>
            <ClientGallery />
        </div>
    )
}