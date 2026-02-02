import Link from 'next/link';
import Image from 'next/image';

export default function SuccessMessage() {
    return (
        <div className="success-container">
            <div className="success-icon-wrapper">
                <div className="success-icon">
                    ✓
                </div>
            </div>
            <h3 className="success-title">You&apos;re on the list!</h3>
            <p className="success-message">
                Thank you for joining the waitlist. We&apos;ll reach out soon with early access details.
            </p>
            <div className="success-actions">
                <Link href="/" className="success-button success-button-primary">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
