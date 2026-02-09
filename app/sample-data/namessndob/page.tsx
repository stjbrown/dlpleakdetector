import SampleDataBox from '@/components/SampleDataBox';
import Link from 'next/link';

export const metadata = {
    title: 'Name/SSN/DOB Sample Data - DLP Test',
    description: 'Sample SSN test data for DLP testing',
};

const ssnData = `Name: John Smith
SSN: 078-05-1120
DOB: 01/15/1985

Name: Sarah Johnson
SSN: 219-09-9999
DOB: 03/22/1990

Name: Michael Williams
SSN: 457-55-5462
DOB: 07/08/1978

Name: Emily Brown
SSN: 001-01-0001
DOB: 11/30/1992

Name: David Garcia
SSN: 627-38-5219
DOB: 05/14/1988

Name: Jessica Martinez
SSN: 586-43-7891
DOB: 09/25/1995

Name: Christopher Lee
SSN: 364-92-1847
DOB: 02/18/1983

Name: Amanda Taylor
SSN: 753-19-4628
DOB: 12/07/1991

Name: Daniel Anderson
SSN: 482-67-3951
DOB: 06/21/1987

Name: Melissa Thomas
SSN: 915-28-7364
DOB: 04/03/1994`;

export default function NameSsnDobPage() {
    return (
        <div className="container">
            <div className="card">
                <h1 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                    🔢 Name / SSN / DOB Test Data
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Sample records containing names, Social Security Numbers, and dates of birth.
                    Use this data to test SSN detection policies.
                </p>
            </div>

            <SampleDataBox data={ssnData} title="10 Sample SSN Records" />

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
