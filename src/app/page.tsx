import { CodeMockup } from "./components/CodeMockup";

export default function Home() {
  return (
    <div className="container mx-auto px-8 flex flex-col lg:flex-row justify-center items-center h-screen font-sans gap-12">
      <div className="flex flex-col space-y-4 text-center lg:text-left">
        <h1 className="text-8xl font-bold">Hi There.</h1>
        <h2 className="text-5xl font-semibold">I'm Zing Jen.</h2>
        <span className="text-lg">
          Penultimate Year Engineering @ NUS and aspiring Software Engineer.
        </span>
      </div>
      <div className="w-full max-w-2xl lg:w-1/2">
        <CodeMockup />
      </div>
    </div>
  );
}
