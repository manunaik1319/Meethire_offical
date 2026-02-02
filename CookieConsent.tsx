'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Show after a small delay for better UX
            setTimeout(() => setShowConsent(true), 1000);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setShowConsent(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setShowConsent(false);
    };

    if (!showConsent) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[1000] bg-white border-t-2 border-[#E5E5E5] shadow-strong p-6 animate-slideUp">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex-1">
                    <p className="text-sm text-[#2A2A2A] leading-relaxed">
                        We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.{' '}
                        <Link href="/privacy" className="text-[#FBCB6A] hover:text-[#F4A940] underline">
                            Learn more
                        </Link>
                    </p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                    <button
                        onClick={declineCookies}
                        className="px-6 py-2.5 border-2 border-[#E5E5E5] text-[#2A2A2A] rounded-lg font-medium transition-all duration-200 hover:border-[#2A2A2A] text-sm"
                    >
                        Decline
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2.5 bg-[#FBCB6A] text-[#1C1C1C] rounded-lg font-semibold transition-all duration-200 hover:bg-[#F4A940] hover:shadow-md text-sm"
                    >
                        Accept Cookies
                    </button>
                </div>
            </div>
        </div>
    );
}
