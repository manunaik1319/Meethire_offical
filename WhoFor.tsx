import Link from 'next/link';
import Image from 'next/image';

export default function WhoFor() {
    return (
        <section className="who-for" id="for-colleges">
            <div className="container">
                <h2 className="section-title">Who Is This For?</h2>
                <p className="section-subtitle">
                    Built for colleges and companies who value efficiency and trust.
                </p>

                <div className="who-grid">
                    <div className="who-card">
                        <div className="who-icon">🎓</div>
                        <h3>For Colleges (TPOs)</h3>
                        <ul>
                            <li>Find verified company HRs</li>
                            <li>Send placement requests</li>
                            <li>Track all drives in one dashboard</li>
                            <li>Manage student eligibility</li>
                        </ul>
                        <Link href="/waitlist" className="who-card-cta">
                            Join as College →
                        </Link>
                        <div className="who-illustration">
                            <Image
                                src="/images/college-illustration.svg"
                                alt="College Building"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>

                    <div className="who-card" id="for-companies">
                        <div className="who-icon">💼</div>
                        <h3>For Company HRs</h3>
                        <ul>
                            <li>Discover verified colleges</li>
                            <li>Post campus hiring requirements</li>
                            <li>Receive proposals from TPOs</li>
                            <li>Schedule drives efficiently</li>
                        </ul>
                        <Link href="/waitlist" className="who-card-cta">
                            Join as Recruiter →
                        </Link>
                        <div className="who-illustration">
                            <Image
                                src="/images/company-illustration.svg"
                                alt="Company Building"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
