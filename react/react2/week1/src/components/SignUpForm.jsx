"use client";
import { Button } from "@mui/material";
import React, { useRef, useState } from "react";

export default function SignUpForm() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef();
  // alternative
  const [username, setUsername] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Username:", ref1.current.value);
    console.log("Lastname:", ref2.current.value);
    console.log("Username:", username);
    console.log("Form submitted!");
    console.log("Form ref:", ref3.current);
    // You can also access the form data using FormData API
  }
  return (
    <form
      onSubmit={handleSubmit}
      ref={ref3}
      className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4"
    >
      <h1 className="text-4xl font-bold mb-6">Sign Up</h1>
      <input ref={ref1} type="text" placeholder="firstname" />
      <input ref={ref2} type="text " placeholder="lastname" />
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text "
        placeholder="username"
      />

      <Button type="submit" variant="contained" className="mt-4">
        Sign Up
      </Button>
      <button>hello</button>
    </form>
  );
}
