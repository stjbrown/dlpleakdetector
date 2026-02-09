import SampleDataBox from '@/components/SampleDataBox';
import Link from 'next/link';

export const metadata = {
    title: 'Name/CCN/Zip Sample Data - DLP Test',
    description: 'Sample credit card test data for DLP testing',
};

const ccnData = `Name: John Smith
Credit Card: 4532015112830366
Exp: 12/27
CVV: 123
Zip: 10001

Name: Sarah Johnson
Credit Card: 5425233430109903
Exp: 03/28
CVV: 456
Zip: 90210

Name: Michael Williams
Credit Card: 378282246310005
Exp: 08/26
CVV: 7890
Zip: 33139

Name: Emily Brown
Credit Card: 6011111111111117
Exp: 01/29
CVV: 234
Zip: 60601

Name: David Garcia
Credit Card: 4916338506082832
Exp: 05/27
CVV: 567
Zip: 75201

Name: Jessica Martinez
Credit Card: 5105105105105100
Exp: 11/28
CVV: 890
Zip: 98101

Name: Christopher Lee
Credit Card: 4000056655665556
Exp: 07/27
CVV: 321
Zip: 02101

Name: Amanda Taylor
Credit Card: 5200828282828210
Exp: 09/28
CVV: 654
Zip: 85001

Name: Daniel Anderson
Credit Card: 371449635398431
Exp: 04/26
CVV: 9876
Zip: 30301

Name: Melissa Thomas
Credit Card: 6011000990139424
Exp: 10/29
CVV: 147
Zip: 48201`;

export default function NameCcnZipPage() {
    return (
        <div className="container">
            <div className="card">
                <h1 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                    💳 Name / CCN / Zip Test Data
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Sample records containing names, credit card numbers, and zip codes.
                    Use this data to test PCI-DSS and credit card detection policies.
                </p>
            </div>

            <div className="card" style={{ background: 'rgba(239, 68, 68, 0.1)', borderColor: 'var(--danger)' }}>
                <p style={{ color: 'var(--danger)', fontWeight: 600 }}>
                    ⚠️ These are test credit card numbers that pass Luhn validation but are not real cards.
                    They are commonly used for payment gateway testing.
                </p>
            </div>

            <SampleDataBox data={ccnData} title="10 Sample Credit Card Records" />

            <div className="card" style={{ marginTop: '2rem' }}>
                <h2>Next Steps</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    Copy the data above and test it on the POST pages:
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link href="/upload-test" className="btn btn-primary">
                        Test Upload →
                    </Link>
                </div>
            </div>
        </div>
    );
}
