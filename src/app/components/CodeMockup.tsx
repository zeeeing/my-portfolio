import Link from "next/link";

export function CodeMockup() {
  return (
    <div className="mockup-code whitespace-pre-wrap break-words">
      {/* <div className="flex items-center justify-between px-4 py-2 rounded-t-lg">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <span className="text-sm font-semibold">Terminal</span>
        <div className="w-8"></div>
      </div> */}
      <pre data-prefix="%">
        <code>cd portfolio</code>
      </pre>
      <pre data-prefix=">" className="text-warning">
        <code>npm i zingjen/portfolio@latest</code>
      </pre>
      <pre data-prefix=">" className="text-warning">
        <code>installing...</code>
      </pre>
      <pre data-prefix="✔" className="text-success">
        <code>Projects loaded: /projects</code>
      </pre>
      <pre data-prefix="✔" className="text-success">
        <code>Resume loaded: /resume</code>
      </pre>
      <pre data-prefix="✔" className="text-success">
        <code>Languages: ["JavaScript", "Python"]</code>
      </pre>
      <pre data-prefix="✔" className="text-success">
        <code>Core Technologies: ["Git", "Node.js"]</code>
      </pre>
      <pre data-prefix="✔" className="text-success">
        <code>
          Frontend Technologies: ["Next.js", "React.js", "Redux", "TailwindCSS",
          "NextUI", "GSAP", "DaisyUI"]
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
    </div>
  );
}
