"use client";
import SignUpForm from "@/components/SignUpForm";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div>
        <h1 className="text-6xl">Welcome to the Home Page React 2 - Week 1</h1>
        <p className="text-4xl">This is the main page of our application.</p>
      </div>
      <button
        onClick={() => router.push("/about")}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        About us
      </button>
      <SignUpForm />
    </>
  );
}
