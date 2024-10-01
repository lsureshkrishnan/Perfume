import React from 'react';
import './product-1.css'; 

const products = [
  {
    id: 1,
    name: "Afnan 9PM EDP For Men - 100ml",
    oldPrice: "Rs. 4,400.00",
    newPrice: "Rs. 2,650.00",
    discount: "-40%",
    img: "https://perfume-bd.com/wp-content/uploads/2021/03/d10c9ae7e34ccb7fbe9fc9b13fcc344f-1536x1536.jpg", // Replace with actual image path
    isSoldOut: false
  },
  {
    id: 2,
    name: "Afnan Modest Une Homme Eau De Parfum 100ml For Men",
    oldPrice: "Rs. 4,500.00",
    newPrice: "Rs. 3,250.00",
    discount: "Soldout",
    img: "https://th.bing.com/th/id/OIP.RFnEKabBollap8uJieMHGAHaE8?rs=1&pid=ImgDetMain",
    isSoldOut: true
  },
  {
    id: 3,
    name: "Afnan Rare Carbon Men Eau De Parfum 100 ML",
    oldPrice: "Rs. 4,000.00",
    newPrice: "Rs. 3,600.00",
    discount: "-10%",
    immg: "https://wallpapercave.com/wp/wp1879441.jpg",
    isSoldOut: false
  },
  {
    id: 4,
    name: "Afnan Supremacy Not Only Intense Extrait De Parfum For Men 150ml",
    oldPrice: "Rs. 6,499.00",
    newPrice: "Rs. 5,300.00",
    discount: "-18%",
    img: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    isSoldOut: false
  }
];

const ProductListing = () => {
  return (
    <div className="product-container">
      <h2 className="exclusive-title">Exclusive Products</h2>
      <div className="products">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="discount-badge">
              {product.isSoldOut ? (
                <span className="soldout-badge">Soldout</span>
              ) : (
                <span className="discount">{product.discount}</span>
              )}
            </div>
            <img src={product.img} alt={product.name} className="product-image" />
            <div className="product-info">
              <p className="product-category">Perfume</p>
              <h3 className="product-name">{product.name}</h3>
              <div className="price-section">
                <span className="old-price">{product.oldPrice}</span>
                <span className="new-price">{product.newPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
