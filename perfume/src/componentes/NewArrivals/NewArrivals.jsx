import React, { useEffect, useState } from "react";
import './new.css'; // Import the CSS for styling

const NewArrivals = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []); // This triggers the animation when the component mounts

  const products = [
    {
      id: 1,
      name: "Jacques Yves Champ De Rose Eau de Parfum 100ml For Men & Women By Fragrance World",
      oldPrice: "Rs. 2,999.00",
      newPrice: "Rs. 2,149.00",
      discount: "-28%",
      img: "https://images3.alphacoders.com/110/thumb-1920-1105646.jpg",
      category: "Perfume",
    },
    {
      id: 2,
      name: "Rifaqat Adorn Eau De Parfum 85ml For Men & Women By Paris Corner",
      oldPrice: "Rs. 2,499.00",
      newPrice: "Rs. 1,599.00",
      discount: "-36%",
      img: "https://fimgs.net/mdimg/secundar/o.76960.jpg",
      category: "Perfume",
    },
    {
      id: 3,
      name: "Picky Rose Eau De Parfum 80ml For Women By Fragrance World",
      oldPrice: "Rs. 2,999.00",
      newPrice: "Rs. 2,199.00",
      discount: "-27%",
      img: "https://i.pinimg.com/originals/89/53/80/895380c3704ac2fc87b221c2cc92f3fb.png",
      category: "Perfume",
    },
    {
      id: 4,
      name: "Oud Wonder Eau De Parfum 80ml For Men By Fragrance World",
      oldPrice: "Rs. 2,999.00",
      newPrice: "Rs. 2,149.00",
      discount: "-28%",
      img: "https://i.pinimg.com/originals/35/94/79/3594793ee69d85ab8e82e780537fa83e.jpg",
      category: "Perfume",
    }
  ];

  const getBorderColor = (id) => {
    switch (id) {
      case 1:
        return '5px solid white';
      case 2:
        return '5px solid white';
      case 3:
        return '5px solid white';
      case 4:
        return '5px solid white';
      default:
        return '5px solid white';
    }
  };

  return (
    <div className={`new-arrivals ${animate ? 'fade-in' : ''}`}>
      <h2 className="www">New Arrivals</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div 
            className="product" 
            key={product.id}
            style={{
              border: getBorderColor(product.id),
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'  // Adding shadow effect
            }}  
          >
            <div className="discount-badge">{product.discount}</div>
            <img src={product.img} alt={product.name} className="product-image" />
            <p className="category">{product.category}</p>
            <h3 className="product-name">{product.name}</h3>
            <p className="old-price">{product.oldPrice}</p>
            <p className="new-price">{product.newPrice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
