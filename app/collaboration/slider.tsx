"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SliderProps {
    images: string[];
}

export default function Slider({ images }: SliderProps) {
    const [slides, setSlides] = useState<string[]>([]);

    useEffect(() => {
        setSlides([...images, ...images]); // for looping animation
    }, [images]);

    return (
        // <div className="anime-wrapper py-12 relative min-h-screen overflow-x-hidden max-w-screen">
        <section className="slider-container relative flex flex-col justify-center items-center z-10">
            <div className="slider">
                <div className="slider-track scrollLeft">
                    {slides.map((img, index) => (
                        <div className="slide flex justify-center items-center" key={index}>
                            <Image
                                src={`/brands/${img}.webp`}
                                alt={img}
                                width={272}
                                height={128}
                                className="slide-image object-contain p-12 "
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
        // </div>
    );
}