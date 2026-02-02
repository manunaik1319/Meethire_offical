'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <Link href="/" className="nav-logo">
                    <Image src="/images/logo.svg" alt="MeetHire Logo" width={36} height={36} className="logo-img" />
                    <span>MeetHire</span>
                </Link>

                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li>
                        <a href="#how-it-works" onClick={closeMobileMenu}>
                            How it Works
                        </a>
                    </li>
                    <li>
                        <a href="#for-colleges" onClick={closeMobileMenu}>
                            For Colleges
                        </a>
                    </li>
                    <li>
                        <a href="#for-companies" onClick={closeMobileMenu}>
                            For Companies
                        </a>
                    </li>
                    <li>
                        <a href="#features" onClick={closeMobileMenu}>
                            Features
                        </a>
                    </li>
                    <li>
                        <Link href="/waitlist" className="nav-cta">
                            Join Waitlist
                        </Link>
                    </li>
                </ul>

                <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}
