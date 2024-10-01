import React from 'react';
import './best.css'; // Assuming custom styles are placed in this file

const bestSellers = [
  {
    id: 1,
    name: "ARMAF Club de Nuit Intense Man Deodorant Spray - For Men (250 ml)",
    oldPrice: "Rs. 499.00",
    newPrice: "Rs. 450.00",
    img: "https://cdn.pixabay.com/photo/2023/06/01/06/21/perfume-8032808_1280.jpg"
  },
  {
    id: 2,
    name: "ARMAF Club De Nuit Milestone Perfume Body Spray (250 ml)",
    oldPrice: "Rs. 499.00",
    newPrice: "Rs. 450.00",
    img: "https://th.bing.com/th/id/OIP.tdIOyh9kMIyWUNs6o25x0gAAAA?rs=1&pid=ImgDetMain"
  },
  {
    id: 3,
    name: "ARMAF The Pride Black Deodorant Spray - For Men (250 ml)",
    oldPrice: "Rs. 499.00",
    newPrice: "Rs. 450.00",
    img: "https://th.bing.com/th/id/R.43412b83650a97a1bb84dabec6baad25?rik=7dca%2by3b%2fN8mOQ&riu=http%3a%2f%2f4.bp.blogspot.com%2f_K7I8dmPvsRw%2fTCrmSWYqlzI%2fAAAAAAAABL0%2fVJppu9vrMEQ%2fs1600%2f6.jpg&ehk=nt%2b2jfMheEOBKAXVawVCXnSAHoSDNW%2bvgK2hdivx5Cc%3d&risl=&pid=ImgRaw&r=0"
  },
  {
    id: 4,
    name: "Hugo Boss The Scent Deodorant 150 Ml For Men",
    oldPrice: "Rs. 1,700.00",
    newPrice: "Rs. 1,449.00",
    img: "https://fimgs.net/photogram/p1200/do/nr/FVC06NrYUaOB66gA.jpg"
  }
];

const BestSellerProduct = () => {
  return (
    <div className="best-seller-container">
      <div className="featured-product">
        <img src="https://i.pinimg.com/originals/84/85/20/8485207854633d939ae483f1abde144f.jpg" alt="Boss Bottled Collection" className="featured-image" />
        <div className="featured-overlay">
          <h2>BOSS BOTTLED COLLECTION</h2>
        </div>
      </div>

      <div className="best-seller-list">
        <h2 className="best-seller-title">Best seller product</h2>
        <div className="best-seller-items">
          {bestSellers.map(product => (
            <div className="best-seller-item" key={product.id}>
              <img src={product.img} alt={product.name} className="best-seller-image" />
              <div className="product-details">
                <p className="product-name">{product.name}</p>
                <div className="price-section">
                  <span className="old-price">{product.oldPrice}</span>
                  <span className="new-price">{product.newPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellerProduct;
