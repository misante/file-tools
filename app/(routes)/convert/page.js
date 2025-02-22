"use client"; // Since we're using client-side features like useState

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import toast from "react-hot-toast";

export default function Convert() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const convertToPDF = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.create();
      const image = await pdfDoc.embedPng(arrayBuffer);
      const page = pdfDoc.addPage([image.width, image.height]);
      page.drawImage(image, { x: 0, y: 0 });
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "converted.pdf";
      link.click();
      toast.success(
        "PNG converted to PDF successfully! Please Check Your Downloads folder",
        { duration: 5000 }
      );
    } catch (err) {
      toast.error("Conversion failed.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-4 mt-20">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          PNG to PDF Converter
        </h1>
        <input
          type="file"
          accept="image/png"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
        <button
          onClick={convertToPDF}
          disabled={!file || loading}
          className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {loading ? "Converting..." : "Convert to PDF"}
        </button>
      </div>
    </div>
  );
}
