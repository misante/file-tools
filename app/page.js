// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
//       <h1 className="text-4xl font-bold text-gray-800 mb-8">
//         Zantex Free File Tools
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
//         {/* Card 1: PNG to PDF */}
//         <a
//           href="/convert"
//           className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//         >
//           <h2 className="text-xl font-semibold text-gray-700">
//             File Format Converter
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Convert PNG, JPEG, and GIF to PDF easily.
//           </p>
//         </a>
//         {/* Card 2: Remove Background */}
//         <a
//           href="/remove-bg"
//           className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//         >
//           <h2 className="text-xl font-semibold text-gray-700">
//             Remove Background
//           </h2>
//           <p className="text-gray-500 mt-2">
//             Easily remove backgrounds from your images.
//           </p>
//         </a>
//         {/* Card 3: compress/ */}
//         <a
//           href="/compress"
//           className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//         >
//           <h2 className="text-xl font-semibold text-gray-700">Compress</h2>
//           <p className="text-gray-500 mt-2">
//             Easily Compress Your file to affordable size.
//           </p>
//         </a>
//         {/* Card 4: text-to-pdf */}
//         <a
//           href="/text-to-pdf"
//           className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
//         >
//           <h2 className="text-xl font-semibold text-gray-700">Text to PDF</h2>
//           <p className="text-gray-500 mt-2">
//             Easily Transform Your Text to PDF.
//           </p>
//         </a>
//         {/* Add this card in the grid in app/page.js */}
//         <div className="mt-8 w-full max-w-4xl">
//           <Link
//             href="/feedback"
//             className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-between"
//           >
//             <div>
//               <h2 className="text-xl font-semibold text-green-800">
//                 Give Feedback
//               </h2>
//               <p className="text-green-600 mt-2">
//                 Share your thoughts to help us improve!
//               </p>
//             </div>
//             <span className="text-green-500 text-lg">📝</span>
//           </Link>
//         </div>
//       </div>
//       <footer className="mt-8 text-gray-600 text-sm">
//         Made with ❤️ |{" "}
//         <a
//           href="https://paypal.me/zantexdigital"
//           // href="https://buy.stripe.com/test_aEUdU4bZH9LP2MU8ww"
//           className="text-blue-600 hover:underline"
//         >
//           Support Zantex Free File Tools
//         </a>
//       </footer>
//     </div>
//   );
// }
import Link from "next/link";

export default function Home() {
  return (
    <div className="py-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Zantex Free File Tools
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Card 1: File Format Converter */}
        <a
          href="/convert"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-700">
            File Format Converter
          </h2>
          <p className="text-gray-500 mt-2">
            Convert PNG and JPEG to PDF easily.
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
        {/* Card 3: Compress */}
        <a
          href="/compress"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-xl font-semibold text-gray-700">Compress</h2>
          <p className="text-gray-500 mt-2">
            Easily compress your files to an affordable size.
          </p>
        </a>
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
      {/* Redesigned Feedback Card (Distinct Style) */}
      <div className="mt-8 w-full max-w-4xl">
        <Link
          href="/feedback"
          className="bg-green-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-between"
        >
          <div>
            <h2 className="text-xl font-semibold text-green-800">
              Give Feedback
            </h2>
            <p className="text-green-600 mt-2">
              Share your thoughts to help us improve!
            </p>
          </div>
          <span className="text-green-500 text-lg">📝</span>
        </Link>
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm">
          Made with ❤️ | Support this tool:
          <a
            href="https://www.paypal.com/paypalme/zantexdigital" // Update with your PayPal link
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline ml-1"
          >
            Support via PayPal
          </a>
        </p>
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm">
          For User Guide my Gumroad page:
          <a
            href="https://antekwe.gumroad.com/l/dmldhu" // Update with your PayPal link
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline ml-1"
          >
            Gumroad
          </a>
        </p>
      </div>
    </div>
  );
}
