import React from 'react';
import './hover.css';

const HoverBoxes = () => {
  return (
    <div className="main-container">
      <h2 className="heading">Incredient Used In</h2> {/* Added heading */}
      <div className="container">
        <div className="key">
          <p>Essential Oils: These are the primary source of fragrance in perfumes. They come from natural sources like flowers, fruits, and spices and provide the distinctive scents.</p>
        </div>
        <div className="key">
          <p>Alcohol: Used as a solvent to dissolve and blend fragrance oils. It also helps the perfume evaporate on the skin, releasing its scent over time.</p>
        </div>
        <div className="key">
          <p>Fixatives: These substances stabilize the fragrance and make it last longer. Common fixatives include natural resins like labdanum and synthetic compounds like musks.</p>
        </div>
        <div className="key">
          <p>Water: Added to dilute the perfume and adjust its strength. It helps in creating lighter fragrances and ensures the perfume is easy to apply.</p>
        </div>
        <div className="key full-width">
          <p>Stabilizers and Preservatives: These are included to maintain the quality and longevity of the perfume. Stabilizers prevent changes in fragrance over time, while preservatives inhibit microbial growth, ensuring the perfume remains safe and effective throughout its shelf life.</p>
        </div>
      </div>
    </div>
  );
}

export default HoverBoxes;
