import TestForm from '@/components/TestForm';

export const metadata = {
    title: 'Upload Test - Data Leak Detector',
    description: 'Test your DLP configuration by uploading sensitive data',
};

export default function UploadTestPage() {
    return (
        <div className="container">
            <div className="card">
                <h1 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                    🔒 Upload Test
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Submit sensitive test data below. If your DLP is working correctly,
                    it will block the request before it reaches this server.
                </p>
            </div>

            <TestForm protocol="HTTPS" />
        </div>
    );
}
