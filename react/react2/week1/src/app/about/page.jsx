"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  const pathName = usePathname();
  console.log("Current Path:", pathName);

  return (
    <div>
      I am the about page of React 2 - Week 1. This is a simple page to
      demonstrate routing in Next.js.
      <button
        onClick={() => router.back()}
        className="border rounded-2xl text-white bg-black px-4 py-2 mt-4"
      >
        Back to Home
      </button>
    </div>
  );
}
