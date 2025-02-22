import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Zantex Free File Tools
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        {/* Card 1: PNG to PDF */}
        <a
          href="/convert"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-700">PNG to PDF</h2>
          <p className="text-gray-500 mt-2">
            Convert your PNG images to PDF in seconds.
          </p>
        </a>
        {/* Card 2: Remove Background */}
        <a
          href="/remove-bg"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-700">
            Remove Background
          </h2>
          <p className="text-gray-500 mt-2">
            Easily remove backgrounds from your images.
          </p>
        </a>
        {/* Card 3: compress/ */}
        <a
          href="/compress"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-700">Compress</h2>
          <p className="text-gray-500 mt-2">
            Easily Compress Your file to affordable size.
          </p>
        </a>
        {/* Card 4: text-to-pdf */}
        <a
          href="/text-to-pdf"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-700">Text to PDF</h2>
          <p className="text-gray-500 mt-2">
            Easily Transform Your Text to PDF.
          </p>
        </a>
      </div>
      <footer className="mt-8 text-gray-600 text-sm">
        Made with ❤️ |{" "}
        <a
          href="https://buymeacoffee.com/zantex"
          className="text-blue-600 hover:underline"
        >
          Support this tool
        </a>
      </footer>
    </div>
  );
}
