import SampleDataBox from '@/components/SampleDataBox';
import Link from 'next/link';

export const metadata = {
    title: 'Name/DOB/Email Sample Data - DLP Test',
    description: 'Sample PII test data for DLP testing',
};

const piiData = `Name: John Smith
DOB: 01/15/1985
Email: john.smith@example.com
Phone: (555) 123-4567

Name: Sarah Johnson
DOB: 03/22/1990
Email: s.johnson@testmail.org
Phone: (555) 234-5678

Name: Michael Williams
DOB: 07/08/1978
Email: m.williams@fakecorp.com
Phone: (555) 345-6789

Name: Emily Brown
DOB: 11/30/1992
Email: emily.brown@sampledata.net
Phone: (555) 456-7890

Name: David Garcia
DOB: 05/14/1988
Email: d.garcia@testuser.io
Phone: (555) 567-8901

Name: Jessica Martinez
DOB: 09/25/1995
Email: jess.martinez@example.org
Phone: (555) 678-9012

Name: Christopher Lee
DOB: 02/18/1983
Email: c.lee@demomail.com
Phone: (555) 789-0123

Name: Amanda Taylor
DOB: 12/07/1991
Email: amanda.t@fakedata.net
Phone: (555) 890-1234

Name: Daniel Anderson
DOB: 06/21/1987
Email: dan.anderson@testsite.org
Phone: (555) 901-2345

Name: Melissa Thomas
DOB: 04/03/1994
Email: melissa.thomas@sampleuser.com
Phone: (555) 012-3456`;

export default function NameDobEmailPage() {
    return (
        <div className="container">
            <div className="card">
                <h1 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>
                    📧 Name / DOB / Email Test Data
                </h1>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Sample records containing names, dates of birth, emails, and phone numbers.
                    Use this data to test PII detection and privacy policies.
                </p>
            </div>

            <SampleDataBox data={piiData} title="10 Sample PII Records" />

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
