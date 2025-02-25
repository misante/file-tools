// // import { Geist, Geist_Mono } from "next/font/google";
// // import "./globals.css";
// // import { Toaster } from "react-hot-toast";

// // const geistSans = Geist({
// //   variable: "--font-geist-sans",
// //   subsets: ["latin"],
// // });

// // const geistMono = Geist_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });

// // export const metadata = {
// //   title: "Create Next App",
// //   description: "Generated by create next app",
// // };

// // export default function RootLayout({ children }) {
// //   return (
// //     <html lang="en">
// //       <body
// //         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
// //       >
// //         {children}
// //         <Toaster position="top-center" />
// //       </body>
// //     </html>
// //   );
// // }
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { Toaster } from "react-hot-toast";
// import HeaderProvider from "./_components/HeaderProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Zantex Free File Tools",
//   description:
//     "A free tool for converting PNG to PDF, removing backgrounds, and compressing images.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gray-100`}
//       >
//         {/* Header */}
//         <HeaderProvider />

//         {/* Main Content */}
//         <main className="flex-grow p-4">
//           <div className="max-w-4xl mx-auto w-full">{children}</div>
//         </main>

//         {/* Footer */}
//         <footer className="bg-gray-800 text-white p-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <p className="text-sm">
//               Made with ❤️ | Support this tool:
//               <a
//                 href="https://paypal.me/zantexdigital"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-300 hover:underline ml-1"
//               >
//                 Support via PayPal
//               </a>
//             </p>
//           </div>
//         </footer>

//         <Toaster position="top-center" />
//       </body>
//     </html>
//   );
// }
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import HeaderProvider from "./_components/HeaderProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zantex Free File Tools",
  description:
    "A free tool for converting PNG to PDF, removing backgrounds, and compressing images.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <script src="https://unpkg.com/gif-frames@0.4.0?main=bundled-min"></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gray-100`}
      >
        {/* Header */}
        <HeaderProvider />

        {/* Main Content */}
        <main className="flex-grow p-4">
          <div className="max-w-4xl mx-auto w-full">{children}</div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm">
              Made with ❤️ | Support this tool:
              <a
                href="https://paypal.me/yourusername" // Update with your PayPal link
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline ml-1"
              >
                Support via PayPal
              </a>
            </p>
          </div>
        </footer>

        <Toaster position="top-center" />
      </body>
    </html>
  );
}
