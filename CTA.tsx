import Link from 'next/link';

export default function CTA() {
    return (
        <section className="cta-section">
            <div className="cta-content">
                <h2 className="cta-title">
                    Ready to Transform Campus Hiring?
                </h2>
                <p className="cta-subtitle">
                    Join hundreds of colleges and companies already on the waitlist.
                </p>
                <Link href="/waitlist" className="cta-button-large">
                    Join the Waitlist Now
                </Link>
                <p className="cta-note">No spam. Early access only. Unsubscribe anytime.</p>
            </div>
        </section>
    );
}
