import { CodeMockup } from "./components/CodeMockup";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-center items-center h-screen font-sans space-y-4 md:space-y-0">
      <div className="flex flex-col space-y-4 w-1/2">
        <h1 className="text-8xl font-bold">Hi There.</h1>
        <h2 className="text-5xl font-semibold">I'm Zing Jen</h2>
        <span className="text-xl">
          Penultimate Year Engineering and aspiring Software Engineer.
        </span>
      </div>

      <div className="mockup-code h-1/2 md:w-1/2">
        <CodeMockup />
      </div>
    </div>
  );
}
