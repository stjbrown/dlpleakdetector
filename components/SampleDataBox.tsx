'use client';

import { useState } from 'react';

interface SampleDataBoxProps {
    data: string;
    title: string;
}

export default function SampleDataBox({ data, title }: SampleDataBoxProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(data);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    return (
        <div className="sample-data-box">
            <button onClick={handleCopy} className="copy-btn">
                {copied ? '✓ Copied!' : 'Copy All'}
            </button>
            <strong style={{ color: 'var(--accent)', display: 'block', marginBottom: '0.5rem' }}>
                {title}
            </strong>
            <pre>{data}</pre>
        </div>
    );
}
