"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import toast from "react-hot-toast";

export default function TextToPDF() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const convertToPDF = async () => {
    if (!text) return;
    setLoading(true);
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage();
      page.drawText(text, { x: 50, y: 700, size: 12 });
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "text.pdf";
      link.click();
      toast.success("Text converted to PDF successfully!", { duration: 5000 });
      setLoading(false);
    } catch (err) {
      toast.error("Conversion failed.");
      console.error(err);
    }
  };

  return (
    <div className="mt-20 bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Text to PDF</h1>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your text here..."
          className="w-full h-32 p-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={convertToPDF}
          disabled={!text || loading}
          className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-gray-400 transition-colors"
        >
          {loading ? "Converting..." : "Convert to PDF"}
        </button>
      </div>
    </div>
  );
}
