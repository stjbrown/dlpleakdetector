import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <Image
          src="/logo.png"
          alt="Data Leak Detector Logo"
          width={150}
          height={150}
          style={{ marginBottom: '1rem' }}
        />
        <h1>Data Leak Detector</h1>
        <p>
          Test your Data Loss Prevention (DLP) software configuration.
          Upload sensitive test data and verify your DLP blocks it correctly.
        </p>
      </section>

      <div className="quick-links">
        <Link href="/upload-test" className="quick-link">
          <h3>🔒 Upload Test</h3>
          <p>Test if DLP blocks sensitive data uploads</p>
        </Link>
        <Link href="/download-test" className="quick-link">
          <h3>📥 Download Test</h3>
          <p>Test if DLP blocks sensitive file downloads</p>
        </Link>
        <Link href="/sample-data" className="quick-link">
          <h3>📋 Sample Data</h3>
          <p>Copy test SSN, CCN, and PII data</p>
        </Link>
      </div>

      <div className="card" style={{ marginTop: "3rem" }}>
        <h2>How to Use This Site</h2>
        <p style={{ marginBottom: "1rem" }}>
          This site helps you verify that your DLP solution is working correctly:
        </p>
        <ol style={{ color: "var(--text-secondary)", paddingLeft: "1.5rem" }}>
          <li style={{ marginBottom: "0.5rem" }}>
            Go to the <strong>Sample Data</strong> section and copy some test sensitive data
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            Navigate to <strong>Upload Test</strong> or <strong>Download Test</strong>
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            Paste the sample data and click <strong>Submit</strong>, or download a test file
          </li>
          <li style={{ marginBottom: "0.5rem" }}>
            <strong style={{ color: "var(--success)" }}>If DLP is working:</strong> Your request will be blocked before completing
          </li>
          <li>
            <strong style={{ color: "var(--danger)" }}>If DLP failed:</strong> You&apos;ll see a warning that your data was transferred
          </li>
        </ol>
      </div>
    </div>
  );
}
