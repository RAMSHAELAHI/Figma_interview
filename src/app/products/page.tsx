import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer"; 
import AboutUs from "@/components/AboutUs";
import Contact from "@/components/Contact";

const ShopPage = () => {

  const products = [
    { id: 1, title: "Dining Sofa Set", img: "/images/4 chair set.jpg" },
    { id: 2, title: "Wooden Dining Chair Set", img: "/images/dinning wooden chairs.jpg" },
    { id: 3, title: "Fancy Sofa", img: "/images/fancy sofa.jpg" },
    { id: 4, title: "Peacock Sofa With Table", img: "/images/peacoke sofa.jpg" },
    { id: 5, title: "Maroon Wooden Chair", img: "/images/marron chair.jpg" },
    { id: 6, title: "Office Dinette Chair", img: "/images/office dinette chair.jpg" },
    { id:7, title: "Softy Stool Sofa", img: "/images/Softy Stool Sofa.jpg" },
    { id: 8, title: "Cyan Sofa Set", img: "/images/cyan Sofa.jpg" },
    { id: 9, title: "Stool Chair", img: "/images/Stool Chair.jpg" },
    { id: 10, title: "Lady Boss", img: "/images/Lady Boss .jpg" },
    { id: 11, title: " Boss Luxury Sofa.jpg", img: "/images/Boss Luxury.jpg" },
    { id: 12, title: "Huge Couch.jpg", img: "/images/Huge Couch.jpg" },
   
   
  ];

  return (
    <div>
      {/* NavBar at the top */}
      <NavBar />

      {/* Products Section */}
      <section className="bg-gradient-to-r from-black to-blue-950 py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={product.img} // Corrected the image URL reference to product.img
                alt={product.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" // Fixed height (h-64) and width (w-full) for equal size images
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/10"></div>
              <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                {product.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Contact Section */}
      <Contact />

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ShopPage;
