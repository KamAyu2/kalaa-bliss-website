"use client"

import { useEffect } from 'react'

export function useScrollAnimation() {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animationClass = entry.target.getAttribute('data-animation') || 'animate-fade-in-up'
                    entry.target.classList.add(animationClass)
                    // Optional: unobserve after animation
                    observer.unobserve(entry.target)
                }
            })
        }, observerOptions)

        // Observe all elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])
}