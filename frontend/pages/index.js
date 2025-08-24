"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/features")
      .then(res => res.json())
      .then(data => setFeatures(data.features))
      .catch(() => setFeatures([]));
  }, []);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to Sylva.ai 🌱</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {features.map(feature => (
          <div key={feature.id} className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
