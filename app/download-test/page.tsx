export const metadata = {
    title: 'Download Test - Data Leak Detector',
    description: 'Test your DLP by downloading files containing sensitive data',
};

export default function DownloadTestPage() {
    const files = [
        {
            name: 'ssn-data.txt',
            path: '/samples/ssn-data.txt',
            description: 'Social Security Numbers with names and DOB',
            icon: '🔢',
            size: '~1 KB',
        },
        {
            name: 'credit-card-data.txt',
            path: '/samples/credit-card-data.txt',
            description: 'Credit card numbers with CVV and billing info',
            icon: '💳',
            size: '~2 KB',
        },
        {
            name: 'pii-data.txt',
            path: '/samples/pii-data.txt',
            description: 'Personal info with emails and phone numbers',
            icon: '📧',
            size: '~1 KB',
        },
    ];

    return (
        <div className="container">
            <div className="card">
                <h1 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                    📥 Download Test
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Download files containing sensitive test data. If your DLP is working correctly,
                    it should block or alert on these file downloads.
                </p>
            </div>

            <div className="card" style={{ background: 'rgba(239, 68, 68, 0.1)', borderColor: 'var(--danger)' }}>
                <p style={{ color: 'var(--danger)', fontWeight: 600 }}>
                    ⚠️ If the download completes successfully, your DLP did NOT block it!
                </p>
            </div>

            <div style={{ display: 'grid', gap: '1rem', marginTop: '1.5rem' }}>
                {files.map((file) => (
                    <div key={file.name} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                                {file.icon} {file.name}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>
                                {file.description}
                            </p>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
                                Size: {file.size}
                            </span>
                        </div>
                        <a
                            href={file.path}
                            download={file.name}
                            className="btn btn-danger"
                        >
                            Download File
                        </a>
                    </div>
                ))}
            </div>

            <div className="card" style={{ marginTop: '2rem' }}>
                <h2>What to expect:</h2>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                        <strong style={{ color: 'var(--success)' }}>DLP Working:</strong> Download should be
                        blocked, quarantined, or trigger an alert before the file saves to your device.
                    </li>
                    <li>
                        <strong style={{ color: 'var(--danger)' }}>DLP Not Working:</strong> If the file
                        downloads and opens normally, your DLP failed to detect the sensitive content.
                    </li>
                </ul>
            </div>
        </div>
    );
}
