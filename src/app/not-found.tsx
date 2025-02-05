"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-9xl font-bold">404</h1>
      <h2 className="mt-4 text-4xl font-bold">Page Not Found</h2>
      <p className="mt-2 text-lg">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button className="mt-6 px-6 py-3" as={Link} href="/" color="primary">
        Go Home
      </Button>
    </div>
  );
}
