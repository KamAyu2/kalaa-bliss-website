import Image from 'next/image'
import { Italianno } from "next/font/google";

const italianno = Italianno({
    subsets: ['latin'],
    weight: '400',
});

export default function About() {
    return (
        <div className=" py-12 px-4 md:px-0">
            <h1
                className={`${italianno.className} text-6xl md:text-7xl mb-4 flex justify-center`}
            >
                About Me
            </h1>

            <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-8 md:my-12 px-4 md:px-0">
                <div className='bg-pink-300 py-2 px-6 rounded-3xl'>
                    <Image
                        src="/she.png"
                        alt="she-img"
                        width={331}
                        height={441}
                        className="mx-auto"
                    />
                    <span className="relative left-35 md:left-50 top-4 text-white font-semibold bg-[#BD7B5C] py-2 px-3 rounded-md z-50">
                        Animator & Illustrator
                    </span>
                </div>

                <div className="max-w-xl">

                    <p className="text-gray-700 text-lg mb-4">
                        About me
                    </p>
                    <h2
                        className="text-3xl my-4"
                    >I&apos;m <span className="text-[#BD7B5C] font-medium">Khushbu Gupta</span> your own Kalaa Bliss</h2>
                    <p className="text-lg text-gray-700 mb-4">
                        Brining Joy through Art, Emotion & Animation I believe every illustration should tell a story, and every animation should evoke emotion. My work sits at the intersection of art and strategy—visual narratives crafted to resonate with specific audiences while staying true
                    </p>

                    <p className="text-lg text-gray-700">

                        With a background in both traditional illustration and digital animation, I bring a unique perspective to brand collaborations.</p>
                </div>
            </section>


        </div>
    );
}