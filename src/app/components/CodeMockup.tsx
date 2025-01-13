import Link from "next/link";

export function CodeMockup() {
  return (
    <>
      <pre data-prefix="%">
        <code>cd portfolio-navbar</code>
      </pre>
      <pre data-prefix=">" className="text-warning">
        <code>Setting up navigation...</code>
      </pre>
      <pre data-prefix="✔" className="text-success">
        <code>Projects loaded: /projects</code>
      </pre>
      <pre data-prefix="✔" className="text-success">
        <code>Resume available: /resume</code>
      </pre>
      <pre data-prefix="✔" className="text-success">
        <code>Frameworks: ["Next.js", "React.js", "Redux"]</code>
      </pre>
      <pre data-prefix="✔" className="text-success">
        <code>Languages: ["JavaScript", "Git", "Node.js", "Python"]</code>
      </pre>
      <pre data-prefix="✔" className="text-success">
        <code>
          Frontend Libraries: ["TailwindCSS", "NextUI", "GSAP", "DaisyUI"]
        </code>
      </pre>
      <pre data-prefix="%">
        <code>Contact Me:</code>
      </pre>
      <pre data-prefix=">" className="text-info">
        <code>LinkedIn: linkedin.com/in/your-profile</code>
      </pre>
      <pre data-prefix=">" className="text-info">
        <code>GitHub: github.com/your-username</code>
      </pre>
      <pre data-prefix=">" className="text-info">
        <code>Email: your.email@example.com</code>
      </pre>
    </>
  );
}
