import React from 'react';
import NavBar from '../components/NavBar';
import Shop from '../components/Shop';
import Home from '../components/Home';
import Product from '../components/Product';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AllProducts from '../components/AllProducts';
import Reserve from '../components/Reserve';
import Offer from '../components/Offer';
import ContactUs from '../components/ContactUs';
import Brand from '../components/Brand';
import AboutUs from '../components/AboutUs';
import FAQ from '@/components/FAQ';
import Cart from '@/components/Cart';

export default function page() {
  return (
   <div> 
    <NavBar />
    <Home/>
    <Shop/>
    <AllProducts />
    <Product/>
    <Offer />
    <Brand />
    <Cart />
    <Reserve />
    <FAQ/>
    <ContactUs />
    <AboutUs/>
    <Contact />
    <Footer/>
    
   

   </div>
  );
}
