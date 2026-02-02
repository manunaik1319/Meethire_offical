import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | MeetHire',
    description: 'Read the terms and conditions for using the MeetHire platform.',
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white py-[120px] px-5">
            <div className="max-w-[900px] mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/" className="inline-flex items-center gap-2 text-[#FBCB6A] hover:text-[#F4A940] mb-6 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        <span>Back to Home</span>
                    </Link>
                    <h1 className="text-5xl font-bold text-[#1C1C1C] mb-4 tracking-[-1px]">Terms of Service</h1>
                    <p className="text-[#666]">Last updated: February 2, 2026</p>
                </div>

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">1. Acceptance of Terms</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            By accessing and using MeetHire, you accept and agree to be bound by the terms and provisions
                            of this agreement. If you do not agree to these terms, please do not use this service.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">2. Use License</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            Permission is granted to temporarily access and use MeetHire for personal, non-commercial purposes.
                            This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="list-disc pl-6 text-[#555] space-y-2">
                            <li>Modify or copy the materials</li>
                            <li>Use the materials for any commercial purpose or for any public display</li>
                            <li>Attempt to decompile or reverse engineer any software contained on MeetHire</li>
                            <li>Remove any copyright or other proprietary notations from the materials</li>
                            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">3. User Accounts</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            To access certain features of MeetHire, you must register for an account. You agree to:
                        </p>
                        <ul className="list-disc pl-6 text-[#555] space-y-2">
                            <li>Provide accurate, current, and complete information during registration</li>
                            <li>Maintain and promptly update your account information</li>
                            <li>Maintain the security of your password</li>
                            <li>Accept all liability for activity that occurs under your account</li>
                            <li>Notify us immediately of any unauthorized access to your account</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">4. Verification and Eligibility</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            MeetHire is designed for verified Training & Placement Officers (TPOs) from educational
                            institutions and Human Resources professionals from companies. By registering:
                        </p>
                        <ul className="list-disc pl-6 text-[#555] space-y-2">
                            <li>You represent that you are authorized to act on behalf of your institution or company</li>
                            <li>You agree to provide legitimate documentation for verification purposes</li>
                            <li>You understand that failure to verify may result in account suspension</li>
                            <li>You will not create multiple accounts or impersonate others</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">5. Prohibited Conduct</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            You agree not to engage in any of the following prohibited activities:
                        </p>
                        <ul className="list-disc pl-6 text-[#555] space-y-2">
                            <li>Copying, distributing, or disclosing any part of the service</li>
                            <li>Using any automated system to access the service</li>
                            <li>Transmitting spam, chain letters, or other unsolicited communications</li>
                            <li>Attempting to interfere with, compromise, or disrupt the service</li>
                            <li>Harvesting or collecting email addresses or other contact information</li>
                            <li>Using the service for any illegal or unauthorized purpose</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">6. Content Guidelines</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            Users may post job requirements, placement proposals, and other professional content. You agree that:
                        </p>
                        <ul className="list-disc pl-6 text-[#555] space-y-2">
                            <li>All content posted must be accurate and truthful</li>
                            <li>You own or have rights to the content you post</li>
                            <li>Content must not violate any laws or regulations</li>
                            <li>Content must not be discriminatory, offensive, or inappropriate</li>
                            <li>MeetHire reserves the right to remove any content that violates these guidelines</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">7. Intellectual Property</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            The service and its original content (excluding user-generated content), features, and
                            functionality are and will remain the exclusive property of MeetHire. The service is protected
                            by copyright, trademark, and other laws.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">8. Disclaimer</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            MeetHire facilitates connections between colleges and companies but does not guarantee:
                        </p>
                        <ul className="list-disc pl-6 text-[#555] space-y-2">
                            <li>The quality or suitability of any placement drives</li>
                            <li>Successful placements or employment outcomes</li>
                            <li>The accuracy of information provided by other users</li>
                            <li>Uninterrupted or error-free service</li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">9. Limitation of Liability</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            MeetHire shall not be liable for any indirect, incidental, special, consequential, or punitive
                            damages resulting from your use of or inability to use the service.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">10. Changes to Terms</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            We reserve the right to modify these terms at any time. We will notify users of any material
                            changes via email or through the service. Continued use of the service after such modifications
                            constitutes acceptance of the updated terms.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">11. Governing Law</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            These terms shall be governed by and construed in accordance with the laws of India, without
                            regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">12. Contact Information</h2>
                        <p className="text-[#555] leading-relaxed mb-4">
                            If you have any questions about these Terms of Service, please contact us:
                        </p>
                        <div className="bg-[#FAFAFA] p-6 rounded-xl border border-[#E5E5E5]">
                            <p className="text-[#555] mb-2">
                                <strong>Email:</strong>{' '}
                                <a href="mailto:meethire.in@gmail.com" className="text-[#FBCB6A] hover:text-[#F4A940]">
                                    meethire.in@gmail.com
                                </a>
                            </p>
                            <p className="text-[#555]">
                                <strong>Address:</strong> MeetHire, India
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
