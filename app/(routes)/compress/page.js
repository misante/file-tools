"use client";

import { useState } from "react";
import imageCompression from "browser-image-compression";
import toast from "react-hot-toast";

export default function Compress() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sizes, setSizes] = useState({ original: null, compressed: null });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setResult(null);
    setSizes({
      original: selectedFile
        ? (selectedFile.size / 1024).toFixed(2) + " KB"
        : null,
      compressed: null,
    });
  };

  const compressImage = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const options = { maxSizeMB: 1, maxWidthOrHeight: 1920 };
      const compressedFile = await imageCompression(file, options);
      const url = URL.createObjectURL(compressedFile);
      setResult(url);
      setSizes((prev) => ({
        ...prev,
        compressed: (compressedFile.size / 1024).toFixed(2) + " KB",
      }));

      // Auto-download
      const link = document.createElement("a");
      link.href = url;
      link.download = "compressed-image.jpg";
      link.click();
      toast.success("Image compressed successfully!");
    } catch (err) {
      toast.error("Compression failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-20 bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Image Compressor
        </h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button
          onClick={compressImage}
          disabled={!file || loading}
          className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {loading ? "Compressing..." : "Compress Image"}
        </button>
        {sizes.original && (
          <p className="mt-4 text-gray-600">
            Original Size: {sizes.original} | Compressed Size:{" "}
            {sizes.compressed || "N/A"}
          </p>
        )}
        {result && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">
              Compressed Image:
            </h3>
            <img
              src={result}
              alt="Compressed"
              className="mt-2 w-full rounded-md shadow-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
}
