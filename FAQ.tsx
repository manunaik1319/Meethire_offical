'use client';

import { useState } from 'react';
import Script from 'next/script';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: 'What is MeetHire?',
            answer: 'MeetHire is a verified platform connecting colleges and companies for structured, transparent campus recruitment. We eliminate spam, streamline communication, and provide real-time tracking for placement drives.',
        },
        {
            question: 'How does verification work?',
            answer: 'All colleges and company HRs undergo a verification process where we validate institutional credentials, email domains, and official documentation. This typically takes 24-48 hours and ensures only legitimate users access the platform.',
        },
        {
            question: 'Is MeetHire free to use?',
            answer: 'We offer a free tier for early access users. Once we launch, we\'ll have flexible pricing plans for both colleges and companies. All waitlist members will get exclusive early-bird pricing.',
        },
        {
            question: 'How do two-way proposals work?',
            answer: 'Companies can post their hiring requirements and TPOs can send requests. Colleges can also search for companies and send placement proposals. Both parties can review, accept, or negotiate terms directly on the platform.',
        },
        {
            question: 'What kind of analytics do you provide?',
            answer: 'We provide real-time dashboards showing placement drive status, student application tracking, offer statistics, company engagement metrics, and historical placement data to help make informed decisions.',
        },
        {
            question: 'Can students use MeetHire?',
            answer: 'Currently, MeetHire is designed for TPOs and company HRs. Students benefit indirectly through their college\'s placement office, which uses our platform to manage drives more efficiently.',
        },
        {
            question: 'How long does it take to get started?',
            answer: 'After approval from the waitlist, onboarding takes just 10-15 minutes. You\'ll create your profile, get verified, and can immediately start browsing and sending proposals.',
        },
        {
            question: 'Do you support video interviews?',
            answer: 'Video interview scheduling and integration with popular tools is on our roadmap for Phase 2. Currently, we focus on connecting verified parties and facilitating the initial coordination.',
        },
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Structured data for FAQ
    const faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <>
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqStructuredData)
                }}
            />
            <section className="faq">
                <div className="container">
                    <h2 className="faq-title">
                        Frequently Asked Questions
                    </h2>
                    <p className="faq-subtitle">
                        Everything you need to know about MeetHire
                    </p>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div key={index} className="faq-item">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="faq-question"
                                >
                                    <span className="faq-question-text">
                                        {faq.question}
                                    </span>
                                    <svg
                                        className={`faq-icon ${openIndex === index ? 'open' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                                    <div className="faq-answer-content">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="faq-contact">
                        <p className="faq-contact-text">Still have questions?</p>
                        <a href="mailto:meethire.in@gmail.com" className="faq-contact-link">
                            Contact our team
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
