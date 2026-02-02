import { FaUserPlus, FaEnvelope, FaWrench, FaClock } from 'react-icons/fa';

export default function Problem() {
    const problems = [
        {
            icon: <FaUserPlus />,
            title: 'Unverified & Risky',
            description: 'Colleges struggle to identify legitimate HRs, leading to spam. HRs waste time validating thousands of college TPO contacts manually.',
        },
        {
            icon: <FaEnvelope />,
            title: 'Chaos in Communication',
            description: 'Critical job details get lost in endless WhatsApp threads, forwarded emails, and scattered spreadsheets. No central source of truth.',
        },
        {
            icon: <FaWrench />,
            title: 'Zero Data Visibility',
            description: "No analytics on placement drives. Colleges can't track student offers effectively, and Companies have no data on campus performance.",
        },
        {
            icon: <FaClock />,
            title: 'Manual Scheduling',
            description: 'Placement officers spend weeks coordinating dates via phone calls. Significant overlap and scheduling conflicts are inevitable.',
        },
    ];

    return (
        <section className="problem" id="features">
            <div className="container">
                <h2 className="section-title">
                    The Problem with Campus Hiring Today
                </h2>
                <p className="section-subtitle">
                    Traditional campus recruitment is broken. Here's why.
                </p>

                <div className="problem-grid">
                    {problems.map((problem, index) => (
                        <div key={index} className="problem-card">
                            <div className="problem-icon">
                                {problem.icon}
                            </div>
                            <h3>{problem.title}</h3>
                            <p>{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
