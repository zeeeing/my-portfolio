import React from "react";
import Link from "next/link";

export const CodeMockup = () => {
  return (
    <div className="mockup-code whitespace-pre-wrap break-words">
      <pre data-prefix=">">
        <code>zingJen.about</code>
      </pre>
      <pre className="text-warning">
        <code>A description about me.</code>
      </pre>
      <pre data-prefix=">">
        <code>zingJen.projects</code>
      </pre>
      <pre className="text-warning">
        <code>["Hypercharged", "WriteNow", "Asteroids", "View All"]</code>
      </pre>
      <pre data-prefix=">">
        <code>zingJen.techStack</code>
      </pre>
      <pre className="text-warning">
        <code>["React.js"]</code>
      </pre>
      <pre data-prefix=">">
        <code>zingJen.resume</code>
      </pre>
      <pre className="text-warning">
        <code>resume.pdf</code>
      </pre>
      <pre data-prefix=">">
        <code>zingJen.contact</code>
      </pre>
      <pre className="text-warning">
        <code>LinkedIn: linkedin.com/in/your-profile</code>
      </pre>
      <pre className="text-warning">
        <code>GitHub: github.com/your-username</code>
      </pre>
      <pre className="text-warning">
        <code>Email: your.email@example.com</code>
      </pre>
    </div>
  );
};
