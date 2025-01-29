"use client";

import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full font-serif gap-12">
      <div className="flex flex-col text-center p-4 gap-6">
        <h1 className="text-5xl font-bold text-secondary">Hi There!</h1>
        <h2 className="text-8xl font-black text-primary">
          <span className="text-5xl text-gray-500">I'm</span> Zing Jen,
        </h2>
        <ul className="flex flex-col text-xl text-secondary font-semibold pt-2">
          <li>{`<3rd Year Engineering Undergraduate @ NUS />`}</li>
          <li>{`<Aspiring Software Engineer />`}</li>
        </ul>
      </div>
      <Button color="primary" variant="flat" size="lg" radius="lg">
        View Projects
      </Button>
    </div>
  );
}
