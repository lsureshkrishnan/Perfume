import React from 'react';
import './about.css'; // Import your CSS file for both the main page and the modal

// Modal Component
const AboutUsModal = ({ closeModal }) => {
  return (
    <div className="modal-backdrop-31">
      <div className="modal-content-31">
        <button className="back-btn-31" onClick={closeModal}>Back</button>
        <div className="about-section-31">
          <div className="about-content-31">
            <h1>About Us</h1>
            <p>
              Our story began with a desire to redefine the way people experience scent. 
              Drawing inspiration from nature, travel, and history, we create perfumes that 
              evoke emotions and tell stories. From floral and citrus to woody and oriental 
              notes, our diverse range offers something for everyone.
            </p>
            <p>
              Sustainability and ethical practices are at the heart of our brand.
              We are proud to source responsibly, using eco-friendly packaging and 
              cruelty-free processes. Our mission is to leave a positive impact on
              both our customers and the planet.
            </p>
            <p>
              Our perfume brand celebrates the art of fragrance, 
              blending rare and high-quality ingredients to craft unforgettable scents. 
              Each fragrance is a unique expression, designed to suit a variety of moods 
              and personalities, from delicate florals to bold, exotic blends. 
            </p>
          </div>
          <div className="about-image-31">
            <img
              src="https://flawless.life/wp-content/uploads/2015/10/avery-perfume-gallery-excelsior-sala.jpg"
              alt="About Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
const MainPage = () => {
  const closeModal = () => {
    window.history.back(); // Navigates back to the previous page in the browser history
  };

  return (
    <div className="main-container-31">
      {/* Show the modal content by default */}
      <AboutUsModal closeModal={closeModal} />
    </div>
  );
};

export default MainPage;
