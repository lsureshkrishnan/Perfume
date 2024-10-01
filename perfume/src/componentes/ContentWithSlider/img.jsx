import React from 'react';
import './img.css';
import { Link } from "react-router-dom";
const ContentWithSlider = () => {
  return (
    <div className="lsk">
    <div className="container1">
      <div className="content-container">
        <h1 className='d'>Your Title Here</h1>
        <div className="boxes">
          <div className="box">Elegant floral fragrance with soft vanilla and citrus undertones.</div>
          <div className="box">Bold, woody aroma with hints of leather and amber warmth.</div>
          <div className="box">Fresh aquatic scent inspired by ocean breezes and summer vibes.</div>
          <div className="box">Luxurious oriental perfume blending spices, musk, and exotic flowers.</div>
          <div className="box">Sweet fruity fragrance with a burst of berries and floral essence.</div>
        </div>
      </div>

      <div className="slider-container">
        <div className="slider-wrapper">
          <img
            src="https://images-static.nykaa.com/media/catalog/product/1/4/1406c26CARLT00011330_4.jpg?tr=w-500"
            alt="Image 1"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbc6hmlZKP6-5DPATrpT8i5qAKGe0o969oA&s"
            alt="Image 2"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTzeUMiX2zM9V7XubIerB7OONacqWSlWw7A&s"
            alt="Image 3"
          />
          <img
            src="https://bellavitaorganic.com/cdn/shop/products/IMPACT-05_967354b5-00d9-4144-ba0d-86dafad8b620.webp?v=1693930765&width=1000"
            alt="Image 4"
          />
          <img
            src="https://bellavitaluxury.co.in/cdn/shop/files/4_c1134126-92cd-4635-a8cc-f3d923f2bb8f.jpg?v=1714555985&width=1000"
            alt="Image 5"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContentWithSlider;
