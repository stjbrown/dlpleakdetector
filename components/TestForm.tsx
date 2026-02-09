'use client';

import { useState, FormEvent } from 'react';

interface TestResult {
    status: 'ALLOWED' | 'EMPTY' | 'ERROR';
    message: string;
    details?: string;
    dataSize?: number;
    dataPreview?: string;
    timestamp?: string;
}

interface TestFormProps {
    protocol: 'HTTP' | 'HTTPS';
}

export default function TestForm({ protocol }: TestFormProps) {
    const [textData, setTextData] = useState('');
    const [file, setFile] = useState<File | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [result, setResult] = useState<TestResult | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResult(null);

        try {
            const formData = new FormData();
            formData.append('textData', textData);
            if (file) {
                formData.append('file', file);
            }

            const response = await fetch('/api/test-upload', {
                method: 'POST',
                body: formData,
            });

            const data: TestResult = await response.json();
            setResult(data);
        } catch (error) {
            console.error('Submission error:', error);
            setResult({
                status: 'ALLOWED',
                message: '⚠️ WARNING: Your DLP did NOT block this upload!',
                details: 'The request reached the server, indicating DLP failed to intercept it.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="textData" className="form-label">
                        Paste sensitive test data here:
                    </label>
                    <textarea
                        id="textData"
                        className="form-textarea"
                        value={textData}
                        onChange={(e) => setTextData(e.target.value)}
                        placeholder="Paste sample SSN, credit card numbers, or other sensitive test data here..."
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="file" className="form-label">
                        Or upload a file containing sensitive data:
                    </label>
                    <input
                        id="file"
                        type="file"
                        className="form-input"
                        onChange={(e) => setFile(e.target.files?.[0] || null)}
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-danger"
                    disabled={isSubmitting || (!textData.trim() && !file)}
                    style={{ width: '100%', fontSize: '1.1rem', padding: '1rem' }}
                >
                    {isSubmitting ? 'Uploading...' : 'Submit Data'}
                </button>
            </form>

            {result && (
                <div className={`result-banner ${result.status === 'ALLOWED' ? 'result-allowed' : 'result-blocked'}`}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                        {result.status === 'ALLOWED' ? '⚠️' : '❌'}
                    </div>
                    <div>{result.message}</div>
                    {result.details && (
                        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.9 }}>
                            {result.details}
                        </p>
                    )}
                    {result.dataSize && (
                        <p style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: 0.7 }}>
                            Data received: {result.dataSize} bytes
                        </p>
                    )}
                </div>
            )}

            <div className="card" style={{ marginTop: '2rem' }}>
                <h2>What to expect:</h2>
                <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                        <strong style={{ color: 'var(--success)' }}>DLP Working:</strong> Your browser or network
                        should block the request before it reaches this server. You may see an error or block page.
                    </li>
                    <li>
                        <strong style={{ color: 'var(--danger)' }}>DLP Not Working:</strong> If you see a red
                        warning banner above, your DLP failed to detect the sensitive data.
                    </li>
                </ul>
            </div>
        </div>
    );
}
