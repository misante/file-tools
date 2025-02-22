"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function RemoveBG() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null); // Reset result when new file is selected
    setError(null); // Reset error
  };

  const removeBackground = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append("image_file", file);
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: { "X-Api-Key": process.env.NEXT_PUBLIC_REMOVE_BG_API_KEY }, // Replace with your actual key
        body: formData,
      });

      if (!response.ok) {
        throw new Error(
          `API error: ${response.status} - ${await response.text()}`
        );
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setResult(url);

      // Auto-download the result
      const link = document.createElement("a");
      link.href = url;
      link.download = "no-bg-image.png";
      link.click();
      toast.success("Background removed successfully!");
    } catch (err) {
      toast.error(err.message || "Failed to remove background");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Remove Background
        </h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button
          onClick={removeBackground}
          disabled={!file || loading}
          className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {loading ? "Processing..." : "Remove Background"}
        </button>
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {result && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Result:</h3>
            <img
              src={result}
              alt="Result"
              className="mt-2 w-full rounded-md shadow-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
}
