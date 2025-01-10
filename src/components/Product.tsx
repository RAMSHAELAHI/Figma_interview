import React from "react";

const Products = [
  {
    id: 1,
    title: "Classy Stool Sofa",
    category: "Fixing",
    price: "13",
    imgUrl: "/images/Stool Chair.jpg",
  },
  {
    id: 2,
    title: "Walvet Sofa",
    category: "Fixing",
    price: "12",
    imgUrl: "/images/peacoke sofa.jpg",
  },
  {
    id: 3,
    title: "Boss Seater",
    category: "Fixing",
    price: "10",
    imgUrl: "/images/Boss Luxury.jpg",
  },
  {
    id: 4,
    title: "Decent Pink Comfy",
    category: "Fixing",
    price: "14",
    imgUrl: "/images/Lady Boss .jpg",
  },
  {
    id: 5,
    title: "Cyan Huge Set",
    category: "Fixing",
    price: "15",
    imgUrl: "/images/cyan Sofa.jpg",
  },
  {
    id: 6,
    title: "Luxury Sofa",
    category: "Fixing",
    price: "16",
    imgUrl: "/images/six.jpg",
  },
  {
    
    id: 7,
    title: "Dining Wooden Chairs",
    category: "Fixing",
    price: "18",
    imgUrl: "/images/dinning wooden chairs.jpg",
  },
  {
    id: 8,
    title: "Modern Lounge",
    category: "Fixing",
    price: "20",
    imgUrl: "/images/purple sofa.jpg",
  },
];

export default function ProductList() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Products.map((product) => (
        <div
          key={product.id}
          className="relative bg-blue-950 rounded-lg shadow-lg overflow-hidden group"
          style={{ height: "300px", width: "100%" }} // Ensures uniform size
        >
          {/* Product Image */}
          <img
            src={product.imgUrl}
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
  );
}
