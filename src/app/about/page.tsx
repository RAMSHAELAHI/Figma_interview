import NavBar from '@/components/NavBar';
import React from 'react';
import { PiClockClockwiseBold } from 'react-icons/pi';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export default function About() {
  return (
    <div> 
      {/* NavBar at the top */}
      <NavBar />
      <section className="container mx-auto py-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-6">
        <h2 className="text-3xl font-bold mb-4 text-amber-700">
          {" "}
        What Makes Our Brand Different?
        </h2>
        <p className="text-blue-950 mb:4 ">
        "Discover premium interior furniture designed to elevate your space and reflect your unique style. From timeless statement pieces to functional designs, our collection combines elegance, quality, and comfort to create a home you’ll love. Redefine your interiors with sophistication and lasting beauty today!"!
        </p>
        <br />
        <button className=" bg-amber-800 text-amber-400 px-4 py-2  rounded hover:bg-amber-100 transition duration-300">
          {" "}
          Order Now
        </button>
        <h3 className="4-xl font-semibold mt-6 mb-2 text-center text-amber-700">
            {" "}
          Coming Soon Our Newly Productive Interior Brand Launches{" "}
        </h3>
        <ul className="1-xl font-semibold mt-6 mb-2 text-center text-blue-950"> 
             
             <li> <strong> Premium Quality : </strong>
             Use of high-quality, sustainable materials.
             Attention to detail in craftsmanship and finishing.</li>
             <br />
             <li> <strong> Innovative Design : </strong>
             Pioneering cutting-edge styles and trends.
             Blending traditional aesthetics with modern elements for timeless appeal.</li>
             <br />
             <li>   <strong> Sustainability : </strong>
             Commitment to eco-friendly practices.
             Designing with materials and techniques that reduce environmental impact.</li>
             <br />
             <li> <strong> Functionality & Comfort  : </strong>
             Designs that balance beauty and practicality.
             Creating spaces that are inviting, ergonomic, and functional.</li>
        
             <br />
             <li> <strong> High-Quality Materials  : </strong>
             Premium woods, metals, fabrics, and finishes that exude luxury.
            Materials that are not only beautiful but also long-lasting and resilient.</li>
             <br />
             <li> <strong> Guarantee  : </strong>
             "Guaranteed smooth delivery, professional installation, and exceptional after-sales support."
              Eliminates stress for customers, ensuring a seamless process.</li>
        </ul> 
        
      </div>
        
<div className="md:w-1/2 mt-2 md:mt-0">
<img src="/images/brand interior.jpg"
alt="Cosmetic"
className="w-full  h-auto  rounded-lg shadow-lg translate-transform duration-500 ease-in-out transform hover:scale-105 mr-7"

 />
 </div>



    </section>
      {/* About Us Content */}
      <div className="mx-auto w-full max-w-screen-8xl">
        <div className="grid grid-cols-2 md:gap-[50px] px-0 md:px-[135px] py-6 lg:py-8 md:grid-cols-4 bg-blue-950 text-white">
          
          {/* About Us Section */}
          <section>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">About Us</h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <p className="text-[#FFFFFF] text-[16px] font-normal hover:underline">
                  We specialize in creating stunning, functional spaces that reflect your style and elevate your living experience. From modern minimalism to timeless elegance, our team brings your interior design dreams to life.
                </p>
              </li>
              <li className="flex gap-[16.5px]">
                <div className="bg-yellow-500 flex justify-center items-center w-[72px] h-[72px]">
                  <PiClockClockwiseBold className="text-white text-[40px]" />
                </div>
                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-normal">Working Hours</h2>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">Mon - Sat (9.00 AM - 7.00 PM)</h3>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">Sunday - By Appointment Only</h3>
                </div>
              </li>
            </ul>
          </section>
  
          {/* Services Section */}
          <section>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">Services</h2>
            <ul className="text-[#FFFFFF] font-medium">
              {['Dinning Sofa Set', 'Wooden Dinning Chair Set', 'Fancy Sofa', 'Peacoke Sofa with Table', 'Maroon Wooden Chair', 'Office Dintte Chair'].map((service) => (
                <li key={service} className="mb-4">
                  <a href="#" className="hover:underline">{service}</a>
                </li>
              ))}
            </ul>
          </section>
  
          {/* Support Section */}
          <section className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">Support</h2>
            <ul className="text-[#FFFFFF] font-medium">
              {['FAQ', 'Terms & Conditions', 'Help & Support', 'Privacy Policy', 'Need Help'].map((link) => (
                <li key={link} className="mb-4">
                  <a href="#" className="hover:underline">{link}</a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Contact and Footer Sections */}
      <Contact />
      <Footer />
    </div>
  );
}
