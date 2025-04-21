import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function PrivacyPolicy() {
  // Constant for last updated date
  const lastUpdated = 'April 21, 2025';

  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      {/* Header */}
      <header className="py-4 md:py-8 px-4 md:px-8 flex items-center">
        <Link href="/" className="flex items-center">
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          <span>Back to Home</span>
        </Link>
        <div className="mx-auto">
          <Link href="/">
            <Image
              src="/contentility.png"
              alt="ContentilityAI Logo"
              width={80}
              height={80}
              priority
            />
          </Link>
        </div>
        <div className="w-[100px]"></div> {/* Spacer to center logo */}
      </header>

      {/* Content */}
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Privacy Policy</h1>
          <p className="text-white/70 italic mb-8">Last Updated: {lastUpdated}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
            <p className="text-white/80 mb-4">
              This Privacy Policy describes how ContentilityAI collects, uses, and shares your information when you use our mobile application.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
            <p className="text-white/80 mb-4">
              <strong>Information You Provide to Us:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-white/80">
              <li>Account information: When you create an account, we collect your email address and other authentication details.</li>
              <li>User content: Content you create, upload, or transform using our AI tools.</li>
              <li>Communications: Messages and feedback you send to us.</li>
            </ul>
            <p className="text-white/80 mb-4">
              <strong>Information Collected Automatically:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 text-white/80">
              <li>Usage data: How you interact with the App, including features used and time spent.</li>
              <li>Device information: Device type, operating system, unique device identifiers.</li>
              <li>Location information: Approximate location based on IP address or precise location if you grant permission.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Legal Basis for Processing</h2>
            <p className="text-white/80 mb-4">
              We collect and process your personal information based on your consent, which you provide when you:
            </p>
            <ul className="list-disc pl-6 mb-4 text-white/80">
              <li>Create an account and accept our Terms of Service</li>
              <li>Enable optional features requiring additional permissions</li>
              <li>Agree to share specific information for particular purposes</li>
            </ul>
            <p className="text-white/80">
              You have the right to withdraw your consent at any time by contacting us or deleting your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
            <p className="text-white/80 mb-4">
              We use your information for purposes that include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-white/80">
              <li>Providing and improving the App functionality</li>
              <li>Personalizing your experience</li>
              <li>Processing in-app purchases</li>
              <li>Displaying relevant advertisements</li>
              <li>Communicating with you about the App</li>
              <li>Analyzing usage patterns to improve features</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Sharing of Information</h2>
            <p className="text-white/80 mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-4 text-white/80">
              <li>Service providers: Companies that help us deliver our services, who are bound by confidentiality obligations.</li>
              <li>Advertising partners: To show relevant ads (including Google AdMob).</li>
              <li>Legal requirements: When required by law or to protect our rights.</li>
            </ul>
            <p className="text-white/80">
              We only disclose the information necessary for these purposes and ensure appropriate safeguards are in place before sharing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
            <p className="text-white/80 mb-4">
              We implement reasonable security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-white/80">
              <li>Encryption of sensitive information</li>
              <li>Regular security assessments</li>
              <li>Access controls and authentication measures</li>
              <li>Staff training on data protection</li>
            </ul>
            <p className="text-white/80">
              However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Data Retention</h2>
            <p className="text-white/80">
              We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. Once your data is no longer required, we will securely delete or anonymize it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Children's Privacy</h2>
            <p className="text-white/80">
              Our App is not directed at children under 13, and we do not knowingly collect personal information from children under 13. If we learn we have collected personal information from a child under 13, we will promptly delete this information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Governing Law</h2>
            <p className="text-white/80">
              This Privacy Policy shall be governed by and construed in accordance with the laws of the Province of Ontario, Canada, without regard to its conflict of law provisions. Any legal action or proceeding arising out of or relating to this Privacy Policy shall be exclusively brought in the courts located in the Province of Ontario, Canada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p className="text-white/80 mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="text-white/80 mb-4">
              <p>Email: hello@contentility.com</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 md:py-6 px-4 md:px-8 text-center text-white/60 border-t border-white/10 text-sm md:text-base">
        <p>© {new Date().getFullYear()} ContentilityAI. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/" className="text-white/60 hover:text-white transition-colors">
            Home
          </Link>
        </div>
      </footer>
    </div>
  );
} 