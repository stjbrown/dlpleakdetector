import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Leak Detector - DLP Testing Tool",
  description: "Test your DLP software configuration by uploading sensitive test data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="navbar-content">
            <Link href="/" className="navbar-brand">
              💧 Data Leak <span>Detector</span>
            </Link>
            <ul className="navbar-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/upload-test">Upload Test</Link></li>
              <li><Link href="/download-test">Download Test</Link></li>
              <li><Link href="/sample-data">Sample Data</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="footer">
          <p>Data Leak Detector - For testing DLP configurations</p>
        </footer>
      </body>
    </html>
  );
}
