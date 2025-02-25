import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            About Zantex Digital
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Meet the creator behind the digital magic.
          </p>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-16">
        <div className="max-w-4x mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <Image
              src="/creator.jpg"
              alt="Creator of Zantex Digital"
              fill
              className="object-cover rounded-full shadow-lg "
            />
          </div>
          <div className="text-center md:text-left md:w-3/4">
            <h2 className="text-3xl font-bold text-gray-800">
              Hi, I’m Anteneh
            </h2>
            <p className="mt-4 text-gray-600">
              I’m a passionate coder and creator who loves building and creating
              digital products—everything from book covers to apps. My goal is
              to make tools and designs that inspire others to bring their ideas
              to life and make life easier. I recently built this File Tools, a
              free web app that helps you convert different file formats to PDFs
              and vice versa, remove image backgrounds, compress files, and
              more—all with no cost and no fuss. It’s my way of giving back to
              the community and solving everyday problems with tech. When I’m
              not coding and crafting, you’ll find me reading sci-fi or
              sketching.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
            >
              Check Out My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Articles/Blog Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Thoughts & Insights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                Why I Started Creating
              </h3>
              <p className="mt-2 text-gray-600">
                It all began with a sketch on a napkin—here’s how I turned my
                doodles into downloads.
              </p>
              <Link
                href="#"
                className="mt-4 inline-block text-indigo-600 hover:underline"
              >
                Read More
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">
                Designing for Creators
              </h3>
              <p className="mt-2 text-gray-600">
                Tips and tricks I’ve learned while making tools for people like
                you.
              </p>
              <Link
                href="#"
                className="mt-4 inline-block text-indigo-600 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
