import React from 'react';
import './blog.css';

const BlogSection = () => {
  return (
    <div className="blog-section">
      <section className="section-1">
        <h2 className="title-2">Latest Blog</h2>
        
        <div className="container-4">
          <div className="card-5">
            <img src="https://managementartists.assets.lookbookspro.com/gm_4e2dc1cc-0a24-454c-b475-0b89f5724477.jpg" alt="Calvin Klein Defy" />
            <p className="text-6">Captivating Scents: Unveiling the Best Perfumes by Calvin Klein</p>
          </div>
          <div className="card-5">
            <img src="https://www.theperfumegirl.com/perfumes/fragrances/bulgari/bvlgari-man-extreme/images/fragrance-website.jpg" alt="Hugo Boss" />
            <p className="text-6">The Unparalleled Fragrance Journey: Discovering the Best Perfumes by Hugo Boss</p>
          </div>
          <div className="card-5">
            <img src="https://i.pinimg.com/originals/4c/e5/36/4ce536e67cc8dfb1d42b351cdcdf39b4.jpg" alt="Afnan Perfumes" />
            <p className="text-6">Exploring the Exquisite Fragrances: The Best Perfumes by Afnan</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
