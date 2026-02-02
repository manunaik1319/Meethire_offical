import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaUserGraduate, FaUserTie } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-grid"></div>
            </div>
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            <span>Now Accepting Early Access Applications</span>
                        </div>

                        <h1 className="hero-title">
                            MeetHire: Streamline Campus Hiring with{' '}
                            <span className="hero-highlight">Verified Connections</span>
                        </h1>

                        <p className="hero-description">
                            MeetHire connects colleges and recruiters through India's leading verified campus hiring platform. 
                            Verified profiles, transparent requirements, and real-time tracking—all in one place.
                        </p>

                        <div className="hero-cta-group">
                            <Link href="/waitlist" className="hero-btn-primary">
                                <span>Request Early Access</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            <a href="#how-it-works" className="hero-btn-secondary">
                                <span>See How It Works</span>
                            </a>
                        </div>

                        <div className="hero-social-proof">
                            <div className="social-proof-avatars">
                                <div className="avatar">
                                    <FaUserGraduate />
                                </div>
                                <div className="avatar">
                                    <FaUserTie />
                                </div>
                                <div className="avatar">
                                    <FaUser />
                                </div>
                                <div className="avatar-more">+50</div>
                            </div>
                            <div className="social-proof-text">
                                <strong>100+ colleges</strong> and <strong>50+ recruiters</strong> already on the waitlist
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-image-wrapper">
                            <div className="hero-image-glow"></div>
                            <Image 
                                src="/images/hero-illustration.svg" 
                                alt="MeetHire Campus Hiring Platform - Dashboard showing verified college and company profiles, placement tracking, and recruitment management" 
                                className="hero-image" 
                                width={600} 
                                height={600}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
