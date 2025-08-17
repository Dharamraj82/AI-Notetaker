import React from 'react';

function Privacy() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center py-16 px-2">
      <div className="w-full max-w-5xl p-10 flex flex-col gap-10">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2 text-center">Privacy Policy</h1>

        {/* Introduction Section */}
        <section className="flex flex-col gap-2">
          <p className="text-gray-700 text-base">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use the AI Notetaker application. By using our service, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Information We Collect Section */}
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-cyan-600">Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-700 text-base space-y-1">
            <li>
              <span className="font-semibold">Transcript and Prompt Data:</span> We process the text transcripts and custom prompts you upload to generate summaries. This data is used solely for the purpose of providing the service you requested. We do not store this data after the summary has been generated and the session has ended.
            </li>
            <li>
              <span className="font-semibold">Email Addresses:</span> If you choose to share a summary via email, we temporarily use the recipient's email address to send the summary. We do not store these email addresses or use them for any other purpose.
            </li>
            <li>
              <span className="font-semibold">Usage Data:</span> We may collect non-personal information about how the service is accessed and used. This may include information such as your computer's IP address, browser type, pages visited, and the time and date of your visit. This data is used to improve the service and its functionality.
            </li>
          </ul>
        </section>

        <hr className="border-t border-gray-200" />

        {/* How We Use Your Information Section */}
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-cyan-600">How We Use Your Information</h2>
          <p className="text-gray-700 text-base">
            The information we collect is used exclusively for the following purposes:
          </p>
          <ul className="list-disc pl-6 text-gray-700 text-base space-y-1">
            <li>To provide and maintain the AI Notetaker service.</li>
            <li>To generate and provide you with AI-powered summaries.</li>
            <li>To enable the sharing of summaries via email as per your request.</li>
            <li>To monitor and analyze the usage of our service to improve its performance and features.</li>
          </ul>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Data Security Section */}
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-cyan-600">Data Security</h2>
          <p className="text-gray-700 text-base">
            We are committed to protecting the security of your data. We implement industry-standard measures to prevent unauthorized access, disclosure, alteration, or destruction of your information. However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure.
          </p>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Changes to This Privacy Policy */}
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-cyan-600">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 text-base">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Contact Us */}
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-cyan-600">Contact Us</h2>
          <p className="text-gray-700 text-base">
            If you have any questions about this Privacy Policy, please contact us at <span className="text-blue-500 font-semibold">dpy9572@gmail.com</span>.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Privacy;