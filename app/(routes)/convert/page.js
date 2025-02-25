"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import toast from "react-hot-toast";

export default function Convert() {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState("png"); // Default to PNG
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileTypeChange = (e) => {
    setFileType(e.target.value);
    setFile(null); // Reset file when type changes
  };

  const convertToPDF = async () => {
    if (!file) return;
    setLoading(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.create();
      let image;
      if (fileType === "png") {
        image = await pdfDoc.embedPng(arrayBuffer);
      } else {
        // jpeg
        image = await pdfDoc.embedJpg(arrayBuffer); // Use embedJpg for JPEGs
      }
      const page = pdfDoc.addPage([image.width, image.height]);
      page.drawImage(image, { x: 0, y: 0 });
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "converted.pdf";
      link.click();
      toast.success(`${fileType.toUpperCase()} converted to PDF successfully!`);
    } catch (err) {
      toast.error(
        `Failed to convert ${fileType.toUpperCase()} to PDF. ${err.message}`
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          File Format Converter
        </h1>
        <div className="mb-4">
          <label
            htmlFor="fileType"
            className="block text-gray-700 font-semibold mb-1"
          >
            Select File Type
          </label>
          <select
            id="fileType"
            value={fileType}
            onChange={handleFileTypeChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="png">PNG</option>
            <option value="jpeg">JPEG</option>
          </select>
        </div>
        <input
          type="file"
          accept={fileType === "png" ? "image/png" : "image/jpeg"}
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
