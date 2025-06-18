"use client"
import { submitAction } from "@/actions/form";
import { useState, useRef } from "react";

export default function Home() {
  let ref = useRef();
  const [result, setResult] = useState(null);

  async function handleAction(e) {
    const res = await submitAction(e);
    setResult(res);
    ref.current.reset();
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-purple-700">Server Actions Form</h1>
        <form ref={ref} action={handleAction} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Name</label>
            <input name="name" id="name" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 text-black" type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="add" className="block text-gray-700 font-medium mb-1">Address</label>
            <input name="add" id="add" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400 text-black" type="text" placeholder="Enter your address" />
          </div>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded transition">Submit</button>
        </form>
        {result && !result.success && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-6">
            <h4 className="font-bold mb-2">Validation Errors:</h4>
            <ul className="list-disc list-inside">
              {result.errors.map((err, idx) => (
                <li key={idx}>{err.message}</li>
              ))}
            </ul>
          </div>
        )}
        {result && result.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mt-6 text-center">
            Form submitted and file written successfully!
          </div>
        )}
      </div>
    </div>
  );
}
