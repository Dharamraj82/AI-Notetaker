import React from 'react';

function About() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-centerpy-16 px-2">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-2 text-center">About AI Notetaker</h1>
        
        {/* About AI Notetaker */}
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-blue-600">What is this website?</h2>
          <p className="text-gray-700 text-base">
            AI Notetaker is a modern web application that helps you summarize and share meeting notes using the power of AI. Upload your transcript, enter a custom prompt, generate a summary, edit it, and share it via email—all in one place.
          </p>
          <p className="text-gray-700 text-base">
            AI Notetaker aims to streamline your workflow by efficiently converting spoken content into actionable summaries. Whether it's business meetings, academic lectures, or personal voice notes, our platform leverages cutting-edge AI to identify key discussion points, decisions, and action items. Spend less time transcribing and more time focusing on what truly matters. Our intuitive interface allows for easy uploading of various transcript formats, and the custom prompt feature gives you control over the summarization style and focus. Experience a new level of productivity with AI-powered note-taking.
          </p>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Tech Stack */}
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-cyan-600">Tech Stack Used</h2>
          <ul className="list-disc pl-6 text-gray-700 text-base space-y-1">
            <li><span className="font-semibold">Frontend:</span> React, Tailwind CSS</li>
            <li><span className="font-semibold">Backend:</span> Node.js, Express (API for AI and email)</li>
            <li><span className="font-semibold">AI:</span> groq API (for summarization)</li>
          </ul>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Key Features */}
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-cyan-600">Key Features</h2>
          <ul className="list-disc pl-6 text-gray-700 text-base space-y-1">
            <li>Effortless transcript upload.</li>
            <li>Customizable summarization through prompt engineering.</li>
            <li>Intelligent identification of key information.</li>
            <li>Editable summaries for personalized refinement.</li>
            <li>Seamless sharing via email.</li>
            <li>User-friendly and intuitive design.</li>
          </ul>
        </section>
        
        <hr className="border-t border-gray-200" />

        {/* About the Developer */}
        <section className="flex flex-col gap-2 items-center">
          <h2 className="text-xl font-bold text-indigo-600">About the Developer</h2>
          <img 
            src="https://image.pollinations.ai/prompt/developer%20working%20on%20AI%20notetaker%20app" 
            alt="Developer" 
            className="rounded-full w-32 h-32 shadow-md mb-4"
          />
          <p className="text-gray-700 text-base text-center">
            This project was developed by a passionate web developer who loves building modern, user-friendly, and AI-powered applications. For feedback or collaboration, feel free to reach out!
          </p>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Contact */}
        <section className="flex flex-col gap-2">
          <h2 className="text-xl font-bold text-indigo-600">Contact</h2>
          <p className="text-gray-700 text-base">
            We'd love to hear from you! For inquiries, support, or feedback, please contact us at:
          </p>
          <p className="text-blue-500 text-base">
            <span className="font-semibold">Email:</span> <a href="mailto:dpy9572@gmail.com">dpy9572@gmail.com</a>
          </p>
          <p className="text-blue-500 text-base">
            <span className="font-semibold">LinkedIn:</span> [
                <a href="https://www.linkedin.com/in/dharamraj-prasad-yadav/">dharamraj-prasad-yadav</a>
            ]
          </p>
        </section>
      </div>
    </main>
  );
}

export default About;