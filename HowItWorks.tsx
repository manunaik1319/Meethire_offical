export default function HowItWorks() {
    const steps = [
        {
            number: '1',
            title: 'Sign Up & Get Verified',
            description: 'Create your profile as a College TPO or Company HR. We verify your credentials.',
            helper: 'Verification takes 24-48 hours',
        },
        {
            number: '2',
            title: 'Send or Receive Proposals',
            description: 'Post hiring requirements or send placement requests. Connect directly.',
            helper: 'Browse verified profiles instantly',
        },
        {
            number: '3',
            title: 'Schedule Placement Drives',
            description: 'Finalize dates, share details, and track everything in real-time.',
            helper: 'All communication in one place',
        },
    ];

    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <h2 className="section-title">How It Works</h2>
                <p className="section-subtitle">
                    Get started in three simple steps.
                </p>

                <div className="steps-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="step-card">
                            <div className="step-number">
                                {step.number}
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                            <p className="step-helper">{step.helper}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
