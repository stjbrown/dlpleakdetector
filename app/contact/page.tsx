export const metadata = {
    title: 'Contact - DLP Test',
    description: 'Contact the DLP Test team',
};

export default function ContactPage() {
    return (
        <div className="container">
            <div className="card">
                <h1 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                    📬 Contact
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Have questions or feedback about DLP Test? Get in touch.
                </p>
            </div>

            <div className="card">
                <form>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="form-input"
                            placeholder="Your name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="form-input"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            id="message"
                            className="form-textarea"
                            placeholder="Your message..."
                            style={{ minHeight: '150px' }}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                        Send Message
                    </button>
                </form>
            </div>

            <div className="card">
                <h2>About This Site</h2>
                <p style={{ color: 'var(--text-secondary)' }}>
                    DLP Test is a resource for testing Data Loss Prevention software configurations.
                    This clone was created for demonstration and testing purposes.
                </p>
            </div>
        </div>
    );
}
