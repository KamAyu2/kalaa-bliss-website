//gallery/page.tsx

import ClientGallery from "./clientgallery";
import { Italianno } from "next/font/google";
import { Metadata } from "next";
// import AnimateOnScroll from '../components/AnimateOnScroll';

const italianno = Italianno({
    subsets: ['latin'],
    weight: '400',
});

export const metadata: Metadata = {
    title: "Art Gallery - Animation & Illustration Portfolio | Kalaa Bliss",
    description: "Explore Kalaa Bliss's art gallery featuring animated reels, custom illustrations, brand work, and digital art. Browse 400k+ creative posts and animations by Khushbu Gupta.",
    keywords: ["art gallery", "animation portfolio", "illustration showcase", "digital art", "animated reels gallery", "custom illustrations", "artist portfolio", "Kalaa Bliss artwork", "Khushbu Gupta art"],
    authors: [{ name: "Khushbu Gupta" }],
    creator: "Khushbu Gupta",
    publisher: "Kalaa Bliss",
    openGraph: {
        title: "Art Gallery - Explore My Animation & Illustration Work",
        description: "Browse through a colorful collection of animations, illustrations, and brand collaborations. Discover the creative world of Kalaa Bliss.",
        type: "website",
        locale: "en_US",
        siteName: "Kalaa Bliss",
        images: [
            {
                url: "/main-img.png", // Update with a gallery preview image if available
                width: 1037,
                height: 401,
                alt: "Kalaa Bliss art gallery preview - animation and illustration showcase",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Art Gallery - Animation & Illustration Portfolio",
        description: "Explore the colorful world of Kalaa Bliss. Browse animated reels, custom illustrations, and creative artwork.",
        images: ["/main-img.png"],
        creator: "@yourtwitterhandle",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function Gallery() {

    const gallerySchema = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Kalaa Bliss Art Gallery",
        "description": "Explore animations, illustrations, and brand collaborations by Khushbu Gupta (Kalaa Bliss)",
        "url": "https://kalaabliss.in/gallery",
        "author": {
            "@type": "Person",
            "name": "Khushbu Gupta",
            "alternateName": "Kalaa Bliss"
        },
        "image": [
            // Example image structure - add your actual images
            {
                "@type": "ImageObject",
                "contentUrl": "https://kalaabliss.in/work/a.png",
                "name": "Animated Reel Example",
                "description": "Custom animated content for social media",
                "creator": {
                    "@type": "Person",
                    "name": "Khushbu Gupta"
                }
            },
            {
                "@type": "ImageObject",
                "contentUrl": "https://kalaabliss.in/work/b.png",
                "name": "Illustrated Story Example",
                "description": "Dynamic visual narrative sequence",
                "creator": {
                    "@type": "Person",
                    "name": "Khushbu Gupta"
                }
            }
            // Add more images as needed
        ],
        "numberOfItems": 400000, // Your 400k+ posts
        "associatedMedia": {
            "@type": "MediaObject",
            "contentUrl": "https://kalaabliss.in/gallery"
        }
    };

    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Art & Animation Gallery",
        "description": "Browse through animated reels, custom illustrations, and brand collaborations",
        "url": "https://kalaabliss.in/gallery",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "CreativeWork",
                    "position": 1,
                    "name": "Animated Reels Collection",
                    "description": "Custom animated content for brands"
                },
                {
                    "@type": "CreativeWork",
                    "position": 2,
                    "name": "Brand Illustrations",
                    "description": "Bespoke illustrations for brand identity"
                },
                {
                    "@type": "CreativeWork",
                    "position": 3,
                    "name": "Story Sequences",
                    "description": "Dynamic illustrated stories"
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />
            {/* <AnimateOnScroll animation="fade-in-down"> */}
            <div>
                <div className="items-center flex flex-col p-12">
                    <h1 className={`${italianno.className} text-6xl md:text-7xl mb-4 `}> Gallery </h1>
                </div>
                <ClientGallery />
            </div>
            {/* </AnimateOnScroll> */}
        </>
    )
}