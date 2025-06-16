"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleClick = async () => {
    setLoading(true);
    let data = {
      name: "Bapu",
      role: "Coder",
    };
    try {
      let a = await fetch("/api/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      let res = await a.json();
      setResponse(res);
    } catch (error) {
      console.error("Error during API call:", error);
      setResponse({ error: "Failed to fetch data" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Next.js API Routes Demo</h1>
      <button onClick={handleClick} disabled={loading}>
        {loading ? "Loading..." : "Click Me"}
      </button>
      {response && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
