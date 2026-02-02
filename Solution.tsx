import Image from 'next/image';

export default function Solution() {
    const solutions = [
        {
            image: '/images/verification-illustration.svg',
            title: 'Verified Profiles',
            description: 'Every college and HR is verified. No fake contacts, no spam.',
        },
        {
            image: '/images/proposal-illustration.svg',
            title: 'Structured Requirements',
            description: 'Standardized job postings with clear eligibility, roles, and compensation.',
        },
        {
            image: '/images/connection-illustration.svg',
            title: 'Two-Way Proposals',
            description: 'HRs can post drives. Colleges can request companies. Both ways work.',
        },
        {
            image: '/images/tracking-illustration.svg',
            title: 'Real-Time Tracking',
            description: 'Track every proposal, response, and placement drive status in one place.',
        },
    ];

    return (
        <section className="solution">
            <div className="container">
                <h2 className="section-title">
                    How MeetHire Solves This
                </h2>
                <p className="section-subtitle">
                    A modern platform built for verified, structured campus hiring.
                </p>

                <div className="solution-grid">
                    {solutions.map((solution, index) => (
                        <div key={index} className="solution-card">
                            <div className="solution-icon-img">
                                <Image
                                    src={solution.image}
                                    alt={solution.title}
                                    width={32}
                                    height={32}
                                />
                            </div>
                            <h3>{solution.title}</h3>
                            <p>{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
