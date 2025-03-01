'use client';
import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button 
        className='fixed bottom-1 right-1 bg-purple-500 text-white rounded-2xl py-3 px-5 text-3xl cursor-pointer z-50 active:scale-50'
            onClick={scrollToTop} 
            style={{
                scale: isVisible ? 1 : 0 ,
            }}
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;