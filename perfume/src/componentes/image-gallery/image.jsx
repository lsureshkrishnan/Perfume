import React from 'react';
import './image.css'; // Import the CSS file
import image1 from "./download (1).jfif";
import image2 from "./download (2).jfif";
import image3 from "./download (3).jfif";
import image4 from "./download (4).jfif";
import image5 from "./download.jfif";

const ImageGallery = () => {
  return (
    <div className="five">
      <img 
        src={image1}
        alt="Description of image 1" 
      />
      <img 
        src={image2}
        alt="Description of image 2" 
      />
      <img 
        src={image3} 
        alt="Description of image 3" 
      />
      <img 
        src={image4}
        alt="Description of image 4" 
      />
      <img 
        src={image5}
        alt="Description of image 5" 
      />
    </div>
  );
};

export default ImageGallery;  // Correct export
