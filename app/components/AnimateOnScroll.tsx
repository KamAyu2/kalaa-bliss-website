"use client"

import { useEffect, useRef, ReactNode } from 'react'

interface AnimateOnScrollProps {
    children: ReactNode
    animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in'
    delay?: number
    className?: string
}

export default function AnimateOnScroll({
    children,
    animation = 'fade-in-up',
    delay = 0,
    className = ''
}: AnimateOnScrollProps) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add(`animate-${animation}`)
                    }, delay)
                    observer.unobserve(entry.target)
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => observer.disconnect()
    }, [animation, delay])

    return (
        <div ref={ref} className={`animate-on-scroll ${className}`}>
            {children}
        </div>
    )
}