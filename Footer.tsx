import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Link href="/" className="footer-logo">
                        <Image src="/images/logo.svg" alt="MeetHire Logo" width={32} height={32} className="logo-img" />
                        <span>MeetHire</span>
                    </Link>
                    <p className="footer-desc">
                        The trusted platform for verified campus hiring. Connecting colleges and companies with transparency,
                        efficiency, and real-time tracking.
                    </p>

                    <div className="footer-social">
                        <a href="https://courseflo.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://www.linkedin.com/company/meethirein" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="mailto:meethire.in@gmail.com" aria-label="Email">
                            <FaEnvelope size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-links-group">
                    <div className="footer-column">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#how-it-works">How it Works</a></li>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#for-colleges">For Colleges</a></li>
                            <li><a href="#for-companies">For Companies</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">System Status</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <p>&copy; 2026 MeetHire. All rights reserved.</p>
                    <div className="made-with">
                        <span>Built for the future of hiring</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
