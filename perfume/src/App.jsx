import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Use BrowserRouter directly
import Header from './componentes/nav/nave';
import Signup from './componentes/signup/signup';
import Login from './componentes/login/login';
import Contact from './componentes/contect/contect';
import Gallery from './componentes/gallery/gallery';
import MainPage from './componentes/aboutus/about'; 
import ImageGallery from './componentes/image-gallery/image';
import HoverBoxes from './componentes/HoverBoxes/hover';
import ProductListing from './componentes/ProductListing/product';
import Product from './componentes/ProductListing-1/prodict-1';
import NewArrivals from './componentes/NewArrivals/NewArrivals';
import BlogSection from './componentes/BlogSection/blog';
import BestSellerProduct from './componentes/BestSellerProduct/best';
import ContentWithSlider from './componentes/ContentWithSlider/img';



function App() {
  return (
    <BrowserRouter> {/* Changed Router to BrowserRouter */}
    <Header />
      <Routes>
         
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<MainPage />} />
      </Routes>
      <Gallery />
      <ImageGallery />
      <HoverBoxes />
      <ContentWithSlider />
      <ProductListing />
      
     
      
      <NewArrivals />
      <BlogSection />
      <BestSellerProduct />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
