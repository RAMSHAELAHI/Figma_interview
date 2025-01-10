import React from 'react';
import { PiClockClockwiseBold } from 'react-icons/pi'; // Ensure this import matches the icon library you're using.

export default function AboutUs() {
  return (
    <div className="mx-auto w-full max-w-screen-8xl">
      <div className="grid grid-cols-2 md:gap-[50px] px-0 md:px-[135px] py-6 lg:py-8 md:grid-cols-4 bg-blue-950 text-white">
        {/* About Us Section */}
        <div>
          <h2 className="mb-6 text-[24px] font-semibold dark:text-white">Comforty</h2>
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
        </div>

        {/* Useful Links Section */}
        <div>
          <h2 className="mb-6 text-[24px] font-semibold dark:text-white">Services</h2>
          <ul className="text-[#FFFFFF] font-medium">
            {['Dinning Sofa Set', 'Wooden Dinning Chair Set', 'Fancy Sofa', 'Peacoke Sofa with Table', 'Maroon Wooden Chair', 'Office Dintte Chair'].map((service) => (
              <li key={service} className="mb-4">
                <a href="#" className="hover:underline">{service}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Section */}
        <div className="mt-10 md:mt-0">
          <h2 className="mb-6 text-[24px] font-semibold dark:text-white">Support</h2>
          <ul className="text-[#FFFFFF] font-medium">
            {['FAQ', 'Terms & Conditions', 'Help & Support', 'Privacy Policy', 'Need Help'].map((link) => (
              <li key={link} className="mb-4">
                <a href="#" className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

  
