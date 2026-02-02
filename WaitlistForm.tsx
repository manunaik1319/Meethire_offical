'use client';

import { useState } from 'react';

interface WaitlistFormProps {
    onSuccess: () => void;
}

export default function WaitlistForm({ onSuccess }: WaitlistFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        organization: '',
        city: '',
        message: '',
        updates: true,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    const validateForm = () => {
        const errors: Record<string, string> = {};

        if (!formData.name.trim()) errors.name = 'Name is required';
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email';
        }
        if (!formData.role) errors.role = 'Please select your role';
        if (!formData.organization.trim()) errors.organization = 'Organization is required';

        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setFieldErrors({});

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxSTchpStjdmEduI2Cy4Q8vp7c4-8BPepdFgISpzDEwHBKzwxx1MUXkXwME3YlpiOgK/exec';

            // Create URL with query parameters (most reliable for Google Apps Script)
            const params = new URLSearchParams({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                role: formData.role,
                organization: formData.organization,
                city: formData.city,
                message: formData.message,
                updates: formData.updates.toString()
            });

            const urlWithParams = `${scriptURL}?${params.toString()}`;

            console.log('Submitting to:', urlWithParams);

            // Fire and forget - show success immediately for better UX
            // The backend will still process everything (save to sheet + send email)
            fetch(urlWithParams, {
                method: 'GET',
                redirect: 'follow',
                keepalive: true // Ensures request completes even if user navigates away
            }).then(response => response.text())
              .then(result => console.log('Background submission completed:', result))
              .catch(err => console.error('Background submission error:', err));

            // Show success immediately without waiting
            onSuccess();

        } catch (err) {
            console.error('Submission error:', err);
            setError('Failed to submit. Please try again or email us at meethire.in@gmail.com');
            setIsSubmitting(false);
        }
    };

    return (
        <form className="waitlist-form" onSubmit={handleSubmit}>
            <div className="form-header">
                <h2 className="form-title">Request Early Access</h2>
                <p className="form-description">Fill in your details to join the waitlist</p>
            </div>

            {error && (
                <div className="form-error">
                    {error}
                </div>
            )}

            <div className="form-field">
                <label htmlFor="name" className="form-label">
                    Full Name <span className="form-required">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${fieldErrors.name ? 'error' : ''}`}
                />
                {fieldErrors.name && (
                    <span className="field-error">{fieldErrors.name}</span>
                )}
            </div>

            <div className="form-field">
                <label htmlFor="email" className="form-label">
                    Email Address <span className="form-required">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${fieldErrors.email ? 'error' : ''}`}
                />
                {fieldErrors.email && (
                    <span className="field-error">{fieldErrors.email}</span>
                )}
            </div>

            <div className="form-field">
                <label htmlFor="phone" className="form-label">
                    Phone Number (Optional)
                </label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                />
            </div>

            <div className="form-field">
                <label htmlFor="role" className="form-label">
                    Your Role <span className="form-required">*</span>
                </label>
                <select
                    id="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className={`form-select ${fieldErrors.role ? 'error' : ''}`}
                >
                    <option value="">Select your role</option>
                    <option value="college">College / TPO</option>
                    <option value="hr">Company HR / Recruiter</option>
                    <option value="student-coordinator">Student Coordinator</option>
                    <option value="student">Student</option>
                    <option value="other">Other</option>
                </select>
                {fieldErrors.role && (
                    <span className="field-error">{fieldErrors.role}</span>
                )}
            </div>

            <div className="form-field">
                <label htmlFor="organization" className="form-label">
                    Organization <span className="form-required">*</span>
                </label>
                <input
                    type="text"
                    id="organization"
                    placeholder="College or Company Name"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className={`form-input ${fieldErrors.organization ? 'error' : ''}`}
                />
                {fieldErrors.organization && (
                    <span className="field-error">{fieldErrors.organization}</span>
                )}
            </div>

            <div className="form-field">
                <label htmlFor="city" className="form-label">
                    City
                </label>
                <input
                    type="text"
                    id="city"
                    placeholder="Your city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-input"
                />
            </div>

            <div className="form-field">
                <label htmlFor="message" className="form-label">
                    How can MeetHire help you? (Optional)
                </label>
                <textarea
                    id="message"
                    placeholder="Tell us about your campus hiring challenges..."
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                ></textarea>
            </div>

            <div className="form-checkbox-group">
                <label className="checkbox-label">
                    <input
                        type="checkbox"
                        id="updates"
                        checked={formData.updates}
                        onChange={handleChange}
                        className="form-checkbox"
                    />
                    <span className="checkbox-text">Send me product updates and announcements</span>
                </label>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="form-submit"
            >
                <span>{isSubmitting ? 'Submitting...' : 'Request Early Access'}</span>
                {!isSubmitting && <span className="submit-arrow">→</span>}
            </button>

            <p className="form-note">
                By submitting, you agree to our Privacy Policy and Terms of Service.
            </p>
        </form>
    );
}
