import React from "react";
import NavBar from "@/components/NavBar"; // Importing NavBar component
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const products = [
  { id: 1, title: "Dining Sofa Set", img: "/images/4 chair set.jpg", price: "150", category: "Sofa" },
  { id: 2, title: "Wooden Dining Chair Set", img: "/images/dinning wooden chairs.jpg", price: "120", category: "Dining Chairs" },
  { id: 3, title: "Fancy Sofa", img: "/images/fancy sofa.jpg", price: "200", category: "Sofa" },
  { id: 4, title: "Peacock Sofa With Table", img: "/images/peacoke sofa.jpg", price: "180", category: "Sofa" },
  { id: 5, title: "Maroon Wooden Chair", img: "/images/marron chair.jpg", price: "90", category: "Chair" },
  { id: 6, title: "Office Dinette Chair", img: "/images/office dinette chair.jpg", price: "110", category: "Chair" },
];

export default function ProductList() {
  return (
    <div>
      {/* Import and render the NavBar at the top */}
      <NavBar />
      {/* Hero Section */}
            <section className="relative overflow-hidden font-sans px-6 py-12 mb-7">
              <div className="absolute inset-0">
                <img
                  src="/images/th.jpg"
                  alt="Luxurious Interior showcasing stylish furniture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 container mx-auto text-center">
                <h1 className="text-amber-600 text-2xl sm:text-4xl md:text-5xl font-serif mb-4">
                  Luxurious Interior By Rumi
                </h1>
                <h2 className="text-white text-xl sm:text-3xl md:text-6xl font-bold mb-4">
                  Explore For More Quality Pieces
                </h2>
                <p className="text-gray-300 text-sm sm:text-lg md:text-xl mb-6 max-w-xl mx-auto">
                  Shop Now For Exclusive Product Discounts!
                </p>
                <button
                  type="button"
                  className="bg-yellow-800 text-white text-sm sm:text-base md:text-lg font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-700 transition duration-300"
                >
                  Exciting Deals Will Be Launched This Weekend
                </button>
              </div>
            </section>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-blue-950 rounded-lg shadow-lg overflow-hidden group"
            style={{ height: "300px" }} // Uniform height for product cards
          >
            {/* Product Image */}
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-2/3 object-cover transition-transform group-hover:scale-105"
            />

            {/* Product Info */}
            <div className="p-4 text-white flex flex-col justify-between h-1/3">
              <span className="block opacity-75 text-sm">{product.category}</span>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <span className="bg-white text-blue-950 text-sm font-bold px-3 py-1 rounded-full">
                  ${product.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional components */}
      <div className="col-span-full mt-12">
        <AboutUs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}