"use client";
import React from "react";
import Link from "next/link"; // Import Link component from Next.js

const Home = () => {
  return (
    <section
      id="Home"
      className="min-h-screen flex items-center bg-no-repeat bg-cover px-8"
      style={{
        backgroundImage: "url(/images/sofa.png)",
        backgroundSize: "auto 70%",
        backgroundPosition: "calc(50% + 2in) center",
      }}
    >
      <div className="max-w-lg">
        <p className="text-sm font-light text-gray-500 uppercase tracking-wide">
          Welcome To Chairy
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 mb-6">
          Best Furniture <br />
          Collection For Your <br />
          Interior.
        </h1>

        {/* Add Link to the button */}
        <Link href="/shop">
          <button className="mt-4 bg-teal-500 text-white px-6 py-3 rounded-md shadow-md text-lg font-medium hover:bg-teal-600 transition">
            Shop Now →
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
