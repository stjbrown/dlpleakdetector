import Link from 'next/link';

export const metadata = {
    title: 'Sample Data - DLP Test',
    description: 'Sample sensitive test data for DLP testing',
};

export default function SampleDataPage() {
    return (
        <div className="container">
            <div className="card">
                <h1 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                    📋 Sample Test Data
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Use this fake sensitive data to test your DLP configuration. All data is fictitious
                    and designed to trigger common DLP policies.
                </p>
            </div>

            <div className="card" style={{ background: 'rgba(74, 158, 255, 0.1)', borderColor: 'var(--accent)' }}>
                <p style={{ color: 'var(--accent)', fontWeight: 600 }}>
                    ℹ️ Note: All SSNs, credit card numbers, and personal information below are fake
                    but formatted to match real data patterns that DLP tools detect.
                </p>
            </div>

            <div className="quick-links">
                <Link href="/sample-data/namessndob" className="quick-link">
                    <h3>🔢 Name / SSN / DOB</h3>
                    <p>Social Security Numbers with names and dates of birth</p>
                </Link>
                <Link href="/sample-data/nameccnzip" className="quick-link">
                    <h3>💳 Name / CCN / Zip</h3>
                    <p>Credit card numbers with names and zip codes</p>
                </Link>
                <Link href="/sample-data/namedobemail" className="quick-link">
                    <h3>📧 Name / DOB / Email</h3>
                    <p>Personal info with dates of birth and email addresses</p>
                </Link>
            </div>
        </div>
    );
}
