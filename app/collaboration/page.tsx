// import { useState, useEffect } from 'react';
import Image from 'next/image';
import './page.css';
import { Italianno } from "next/font/google";
import { BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import Slider from './slider';

const italianno = Italianno({
    subsets: ['latin'],
    weight: '400',
});

export default function Collabration() {
    // Single slider with 5 images
    const sliderImages = ["bakingo", "iba", "garnier", "gozero", "salty"];

    return (
        <div className="anime-wrapper py-12 relative min-h-screen overflow-x-hidden max-w-screen">
            <h1 className={`${italianno.className} text-6xl md:text-7xl mb-4 flex justify-center`}>Collabration</h1>

            <section className='w-full md:w-11/12 mx-auto mb-12 flex flex-col md:flex-row gap-8 md:gap-4 items-center justify-center'>
                <div className="mx-8 md:mx-12 my-8 flex flex-col gap-4 justify-center">
                    <p className="uppercase text-gray-600">
                        For Brands & Agencies
                    </p>
                    <h1 className='text-4xl md:text-5xl text-start'>
                        Let&apos;s create something your audience <br /> will remember
                    </h1>

                    <p className='text-gray-800 max-w-2xl text-xl mt-4'>
                        From animated reels to custom illustrations, I partner with brands who value authenticity, quality, and visual storytelling that makes an impact.
                    </p>

                    <div className='flex gap-2'>
                        <Link
                            className="bg-[#BD7B5C] text-white px-6 py-3 rounded-full hover:bg-[#BD7B6C] transition duration-300 cursor-pointer "

                            href="/connect"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            className="border-2 font-semibold border-black text-black px-3 py-2 rounded-full hover:bg-gray-400 transition duration-300 cursor-pointer"
                            href="/gallery"
                        >
                            Explore My Work
                        </Link>
                    </div>

                </div>

                <div>
                    <Image
                        src="/c1.png"
                        width={400}
                        height={400}
                        alt="collaboration-img"
                    />
                </div>
            </section>

            <section>
                <div className="collab-text-container mx-8 md:mx-16 my-8 flex flex-col gap-4 text-start">
                    <p className='uppercase text-gray-600'>
                        Collaboration Formats
                    </p>
                    <h2 className='text-4xl' >
                        Choose the format that fits your needs
                    </h2>
                    <p className='text-gray-600 max-w-4xl'>
                        I offer a variety of collaboration formats to suit your brand&apos;s needs. Whether you&apos;re looking for a one-time project or an ongoing partnership, I&apos;m here to help bring your vision to life through my unique artistic style.
                    </p>
                    <div className='mt-8 flex flex-col gap-12 '>
                        <div className='flex flex-col md:flex-row gap-8 md:gap-16 mt-8 text-center items-center w-full md:w-11/12  mx-auto'>
                            <Image
                                src="/work/a.png"
                                height={283}
                                width={364}
                                alt="collaboration-format"
                                className="rounded-lg"
                            />
                            <div className='max-w-xl text-start flex flex-col gap-4'>
                                <h3 className='text-4xl mb-2'>Animated Reels</h3>

                                <p className='text-gray-600 max-w-2xl '>
                                    Custom-crafted animated content designed to capture attention in crowded feeds. Perfect for product launches, brand storytelling, and campaign highlights.
                                </p>

                                <div>
                                    <p className="uppercase text-gray-600">
                                        What&apos;s Included
                                    </p>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-2 '>
                                        <div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>15-60 second animations</span>
                                        </div><div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>Optimized for Instagram/TikTok</span>
                                        </div><div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>Multiple format exports</span>
                                        </div><div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>2-3 revision rounds</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div><div className='flex flex-col md:flex-row-reverse gap-8 md:gap-16 mt-8 text-center items-center w-full md:w-11/12  mx-auto'>
                            <Image
                                src="/work/b.png"
                                height={283}
                                width={364}
                                alt="collaboration-format"
                                className="rounded-lg"
                            />
                            <div className='max-w-xl text-start flex flex-col gap-4'>
                                <h3 className='text-4xl mb-2'>Illustrated Stories</h3>

                                <p className='text-gray-600 max-w-2xl '>
                                    Dynamic story sequences that engage followers with visual narratives. Ideal for ongoing brand presence and audience connection.
                                </p>

                                <div>
                                    <p className="uppercase text-gray-600">
                                        What&apos;s Included
                                    </p>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-2 '>
                                        <div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>5-10 story frames</span>
                                        </div><div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>Interactive elements</span>
                                        </div><div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>Swipe-up ready</span>
                                        </div><div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>Template options</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div><div className='flex flex-col md:flex-row gap-8 md:gap-16 mt-8 text-center items-center w-full md:w-11/12  mx-auto'>
                            <Image
                                src="/work/c.png"
                                height={283}
                                width={364}
                                alt="collaboration-format"
                                className="rounded-lg"
                            />
                            <div className='max-w-xl text-start flex flex-col gap-4'>
                                <h3 className='text-4xl mb-2'>
                                    Brand Illustrations</h3>

                                <p className='text-gray-600 max-w-2xl '>
                                    Bespoke illustrations that capture your brand&apos;s unique identity. From character design to full campaign visuals.
                                </p>

                                <div>
                                    <p className="uppercase text-gray-600">
                                        What&apos;s Included
                                    </p>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-2 '>
                                        <div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>Custom artwork</span>
                                        </div><div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>Style guide included</span>
                                        </div><div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>High-res files</span>
                                        </div><div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>Usage rights</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div><div className='flex flex-col md:flex-row-reverse gap-8 md:gap-16 mt-8 text-center items-centerw-full md:w-11/12  mx-auto'>
                            <Image
                                src="/work/d.png"
                                height={283}
                                width={364}
                                alt="collaboration-format"
                                className="rounded-lg"
                            />
                            <div className='max-w-xl text-start flex flex-col gap-4'>
                                <h3 className='text-4xl mb-2'>Animated Posts</h3>

                                <p className='text-gray-600 max-w-2xl '>
                                    Engaging animated posts that stand out in feeds. Great for announcements, promotions, and enhancing brand visibility.
                                </p>

                                <div>
                                    <p className="uppercase text-gray-600">
                                        What&apos;s Included
                                    </p>

                                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mt-2 '>
                                        <div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>Custom artwork</span>
                                        </div><div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>Style guide included</span>
                                        </div><div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>Multiple format exports</span>
                                        </div><div className='flex items-center gap-2'>
                                            <BadgeCheck className='text-[#BD7B5C]' />
                                            <span>2-3 revision rounds</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="collab-text-container mx-16 my-24 flex flex-col gap-4 text-center">
                <div >
                    <p className='uppercase text-gray-600'>
                        Why Partner With Me
                    </p>
                    <h2 className='text-3xl md:text-4xl'>
                        What you gain from collaboration
                    </h2>

                    <div className='mt-12 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-8 flex-wrap'>
                        <div className='text-start flex flex-col gap-4 bg-gray-400/10 p-6 rounded-lg max-w-xl '>
                            <span className='text-[#BD7B5C] text-lg'>01</span>
                            <h3 className='text-xl'>Authentic Engagement</h3>
                            <p className='text-gray-600 max-w-2xl text-sm'>Content that resonates with audiences because it&apos;s crafted with genuine artistic vision, not generic templates.</p>

                        </div>
                        <div className='text-start flex flex-col gap-4 bg-gray-400/10 p-6 rounded-lg max-w-xl'>
                            <span className='text-[#BD7B5C] text-lg'>02</span>
                            <h3 className='text-xl'>Storytelling Impact</h3>
                            <p className='text-gray-600 max-w-2xl text-sm'>Visuals that don&apos;t just look good—they communicate your brand&apos;s story in ways that create lasting impressions.</p>

                        </div><div className='text-start flex flex-col gap-4 bg-gray-400/10 p-6 rounded-lg max-w-xl'>
                            <span className='text-[#BD7B5C] text-lg'>03</span>
                            <h3 className='text-xl'>Strategic Alignment</h3>
                            <p className='text-gray-600 max-w-2xl text-sm'>Every piece is created with your business objectives in mind, balancing creativity with commercial effectiveness.</p>

                        </div><div className='text-start flex flex-col gap-4 bg-gray-400/10 p-6 rounded-lg max-w-xl'>
                            <span className='text-[#BD7B5C] text-lg'>04</span>
                            <h3 className='text-xl'>Audience Connection</h3>
                            <p className='text-gray-600 max-w-2xl text-sm'>Leverage my understanding of social media dynamics and audience psychology to maximize content performance.</p>

                        </div>
                    </div>

                </div>
            </section>

            <section>
                <div className="collab-text-container mx-16 my-8 flex flex-col text-center">


                    <p className='uppercase text-gray-600'>
                        Teams that trusted my vision
                    </p>
                    <h2 className='text-3xl md:text-4xl mb-2' >
                        Brands I&apos;ve Worked With
                    </h2>

                </div>
            </section>

            <section className="slider-container relative flex flex-col justify-center items-center z-10">
                <Slider images={sliderImages} />
            </section>

        </div>
    );
}