'use client';

import { useState } from 'react';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Dr. Priya Sharma',
            role: 'Training & Placement Officer',
            organization: 'SVNIT, Surat',
            image: '👩‍🎓',
            rating: 5,
            quote: 'MeetHire has simplified our entire placement process. No more spam calls from unverified companies. The two-way proposal system is a game-changer.',
        },
        {
            name: 'Rahul Mehta',
            role: 'HR Manager',
            organization: 'TechCorp Solutions',
            image: '👨‍💼',
            rating: 5,
            quote: 'Finally, a platform that connects us directly with verified college TPOs. We have reduced our hiring cycle time by 40% using MeetHire.',
        },
        {
            name: 'Anjali Desai',
            role: 'Placement Coordinator',
            organization: 'IIT Bombay',
            image: '👩‍💻',
            rating: 5,
            quote: 'The real-time tracking and analytics have given us insights we never had before. MeetHire is exactly what campus recruitment needed.',
        },
        {
            name: 'Vikram Singh',
            role: 'Talent Acquisition Lead',
            organization: 'Infosys',
            image: '👨‍💼',
            rating: 5,
            quote: 'Structured requirements and transparent communication have made our campus drives more efficient. Highly recommend MeetHire!',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="testimonials-title">
                    Loved by TPOs & Recruiters
                </h2>
                <p className="testimonials-subtitle">
                    See what our early users have to say about MeetHire
                </p>

                <div className="testimonial-wrapper">
                    <div className="testimonial-card">
                        <div className="testimonial-stars">
                            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="star-icon"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            ))}
                        </div>

                        <blockquote className="testimonial-quote">
                            "{testimonials[currentIndex].quote}"
                        </blockquote>

                        <div className="testimonial-author">
                            <div className="author-avatar">
                                {testimonials[currentIndex].image}
                            </div>
                            <div className="author-info">
                                <div className="author-name">
                                    {testimonials[currentIndex].name}
                                </div>
                                <div className="author-role">
                                    {testimonials[currentIndex].role}
                                </div>
                                <div className="author-organization">
                                    {testimonials[currentIndex].organization}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-navigation">
                        <button
                            onClick={prevTestimonial}
                            className="nav-button"
                            aria-label="Previous testimonial"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>

                        <div className="testimonial-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextTestimonial}
                            className="nav-button"
                            aria-label="Next testimonial"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
