import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#FAFAFA] px-5">
            <div className="text-center max-w-[600px]">
                {/* 404 Illustration */}
                <div className="mb-8">
                    <div className="text-[150px] font-bold text-[#FBCB6A] leading-none animate-pulse-dot">
                        404
                    </div>
                </div>

                {/* Message */}
                <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4 tracking-[-1px]">
                    Page Not Found
                </h1>
                <p className="text-lg text-[#666] mb-8 leading-relaxed">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-[#F4A940] hover:-translate-y-0.5 hover:shadow-glow"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Home</span>
                    </Link>
                    <Link
                        href="/waitlist"
                        className="inline-flex items-center gap-2 border-2 border-[#E5E5E5] text-[#2A2A2A] px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:border-[#FBCB6A] hover:text-[#FBCB6A]"
                    >
                        <span>Join Waitlist</span>
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t border-[#E5E5E5]">
                    <p className="text-sm text-[#999] mb-4">Looking for something specific?</p>
                    <div className="flex flex-wrap gap-4 justify-center text-sm">
                        <Link href="/#how-it-works" className="text-[#FBCB6A] hover:text-[#F4A940] transition-colors">
                            How it Works
                        </Link>
                        <span className="text-[#E5E5E5]">•</span>
                        <Link href="/#features" className="text-[#FBCB6A] hover:text-[#F4A940] transition-colors">
                            Features
                        </Link>
                        <span className="text-[#E5E5E5]">•</span>
                        <a href="mailto:meethire.in@gmail.com" className="text-[#FBCB6A] hover:text-[#F4A940] transition-colors">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
