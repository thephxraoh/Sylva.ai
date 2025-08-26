"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error connecting to backend"));
  }, []);

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 text-center mb-6">
          Welcome to Sylva.ai
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-xl mb-8">
          {message}
        </p>
        <a
          href="#get-started"
          className="px-6 py-3 bg-black text-white rounded-2xl shadow hover:bg-gray-800 transition"
        >
          Get Started
        </a>
      </main>
    </>
  );
}
