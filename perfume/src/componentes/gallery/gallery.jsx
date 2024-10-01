import React, { useState, useEffect } from 'react';
import './gallery.css';  // Import external CSS for styling

const Gallery = () => {
  const [x, setX] = useState(0); // State for the gallery rotation

  useEffect(() => {
    const autoRotate = () => {
      setX((prevX) => prevX - 45); // Rotate automatically by 45 degrees
    };

    const intervalId = setInterval(autoRotate, 3000); // Auto-rotate every 3 seconds

    return () => clearInterval(intervalId); // Cleanup the interval when the component unmounts
  }, []);

  // Function to manually update the gallery with rotation (on button click)
  const updateGallery = (rotation) => {
    setX((prevX) => prevX + rotation); // Rotate manually on button click
  };

  return (
    <div className='imagesperfume'>
      <div className="image-container" style={{ transform: `perspective(1000px) rotateY(${x}deg)` }}>
        <span style={{ '--i': 1 }}><img src="https://perfume-bd.com/wp-content/uploads/2021/03/d10c9ae7e34ccb7fbe9fc9b13fcc344f-1536x1536.jpg" alt="Image 1" /></span>
        <span style={{ '--i': 2 }}><img src="https://perfume-bd.com/wp-content/uploads/2021/03/d10c9ae7e34ccb7fbe9fc9b13fcc344f-1536x1536.jpg" alt="Image 2" /></span>
        <span style={{ '--i': 3 }}><img src="https://perfume-bd.com/wp-content/uploads/2021/03/d10c9ae7e34ccb7fbe9fc9b13fcc344f-1536x1536.jpg" alt="Image 3" /></span>
        <span style={{ '--i': 4 }}><img src="https://perfume-bd.com/wp-content/uploads/2021/03/d10c9ae7e34ccb7fbe9fc9b13fcc344f-1536x1536.jpg" alt="Image 4" /></span>
        <span style={{ '--i': 5 }}><img src="https://perfume-bd.com/wp-content/uploads/2021/03/d10c9ae7e34ccb7fbe9fc9b13fcc344f-1536x1536.jpg" alt="Image 5" /></span>
        <span style={{ '--i': 6 }}><img src="https://perfume-bd.com/wp-content/uploads/2021/03/d10c9ae7e34ccb7fbe9fc9b13fcc344f-1536x1536.jpg" alt="Image 6" /></span>
        <span style={{ '--i': 7 }}><img src="https://perfume-bd.com/wp-content/uploads/2021/03/d10c9ae7e34ccb7fbe9fc9b13fcc344f-1536x1536.jpg" alt="Image 7" /></span>
        <span style={{ '--i': 8 }}><img src="https://perfume-bd.com/wp-content/uploads/2021/03/d10c9ae7e34ccb7fbe9fc9b13fcc344f-1536x1536.jpg" alt="Image 8" /></span>
      </div>

      <div className="btn-container">
        <button className="btn" onClick={() => updateGallery(45)}>Prev</button>
        <button className="btn" onClick={() => updateGallery(-45)}>Next</button>
      </div>
    </div>
  );
};

export default Gallery;
