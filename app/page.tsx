import Image from "next/image";
import { Italianno } from "next/font/google";
import { BadgeCheck, CircleFadingPlus, Users } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

const italianno = Italianno({
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  title: "Welcome to My Art & Animation World | Artist Portfolio",
  description: "Explore my colorful world of art and animation. Join 130k+ followers experiencing happiness and positivity through creative artworks and animations.",
  keywords: ["art", "animation", "digital art", "artist portfolio", "creative artwork", "illustration"],
  authors: [{ name: "Kalaa Bliss" }],
  creator: "Kalaa Bliss",
  publisher: "Kalaa Bliss",
  openGraph: {
    title: "Welcome to My Art & Animation World",
    description: "Hey all cuties out there! Join my colorful world of art and animation with 130k+ followers and 400k+ posts delivered.",
    type: "website",
    locale: "en_US",
    siteName: "Artist Portfolio",
    images: [
      {
        url: "/main-img.png",
        width: 1037,
        height: 401,
        alt: "Artist Portfolio Main Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to My Art & Animation World",
    description: "Explore my colorful world of art and animation. Join 130k+ followers!",
    images: ["/main-img.png"],
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
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function Home() {
  return (
    <div className="">
      <div className="items-center flex flex-col md:min-h-screen py-18  text-center gap-4 md:gap-3">
        <h1 className={`${italianno.className} z-30 text-6xl md:text-7xl`}>
          Welcome to my World...</h1>

        <p className="w-11/12 md:w-10/12 italic
          text-gray-600 text-lg md:text-xl z-30">
          Hey all cuties out there! I welcome you to my colorful world of art and animation.
        </p>
        <Link
          href="/gallery"
          className="cta py-2 px-4 bg-pink-400 text-white rounded-full font-bold relative  group z-30 cursor-pointer">
          Watch my artworks
        </Link>


        <Image
          src="/main-img.png"
          alt="Artist portfolio main image showcasing colorful art and animation world"
          width={1037}
          height={401}
          className="mx-auto md:absolute bottom-0"
          priority
        />
      </div>

      <section className="collab-text-container mx-16 my-24 md:my-12 flex flex-col gap-4 text-center">
        <div >
          <p className='uppercase text-gray-600'>
            Stats Showcase
          </p>
          <h2 className='text-3xl md:text-4xl'>
            Number say&apos;s it all
          </h2>

          <div className='my-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 flex-wrap'>
            <div className='text-center flex flex-col items-center gap-2 bg-gray-400/10 p-8 rounded-lg max-w-xl '>
              <p className='text-[#BD7B5C] mb-2'>
                <Users className="w-16 h-16" aria-hidden="true" />
              </p>
              <h3 className='text-2xl font-semibold'>130k+</h3>
              <p className='text-gray-800 max-w-2xl text-sm'> Followers on Instagram</p>

            </div><div className='text-center flex flex-col items-center gap-2 bg-gray-400/10 p-8 rounded-lg max-w-xl '>
              <p className='text-[#bd5ca6] mb-2'>
                <CircleFadingPlus className="w-16 h-16" aria-hidden="true" />
              </p>
              <h3 className='text-2xl font-semibold'>400k+</h3>
              <p className='text-gray-800 max-w-2xl text-sm'> Posts & Reels delivered</p>

            </div><div className='text-center flex flex-col items-center gap-2 bg-gray-400/10 p-8 rounded-lg max-w-xl '>
              <p className='text-[#bd5c5c] mb-2'>
                <BadgeCheck className="w-16 h-16" aria-hidden="true" />
              </p>
              <h3 className='text-2xl font-semibold'>6+</h3>
              <p className='text-gray-800 max-w-2xl text-sm'> Brand Collabrations done</p>

            </div>

          </div>

        </div>
      </section>


      <section>
        <div className="bg-pink-100 py-16 flex flex-col items-center justify-center gap-8 md:gap-8 mb-8 md:mb-12 px-4 md:px-0">

          <h2 className={`${italianno.className} text-5xl md:text-7xl font-semibold mb-8 md:mb-0`}>
            My Mission
          </h2>
          <p className="w-11/12 md:w-8/12 italic
            text-gray-600 text-lg md:text-xl z-30 text-center">
            My mission is to spread happiness and positivity through my art and animations. I believe that art has the power to uplift spirits, inspire creativity, and bring people together. Through my work, I aim to create a world where everyone can experience the joy and magic of art.
          </p>
        </div>
      </section>
    </div>
  );
}