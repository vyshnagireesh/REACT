import React from "react";
import "./PopularProducts.css";

const products = [
  { id: 1, name: "Smart Watch", price: "$120", img: "https://www.androidauthority.com/wp-content/uploads/2024/07/Samsung-Galaxy-Watch-7-on-table.jpg" },
  { id: 2, name: "Headphones", price: "$80", img: "https://tse4.mm.bing.net/th/id/OIP.OExUEZaIe9dvm7xnanS_hQHaGk?pid=Api&P=0&h=180" },
  { id: 3, name: "Camera", price: "$250", img: "https://tse4.mm.bing.net/th/id/OIP.qn0r0QFYF6j37qJR2wT4UgHaE8?pid=Api&P=0&h=180" },
  { id: 4, name: "Sneakers", price: "$100", img: "https://tse4.mm.bing.net/th/id/OIP.f0x6mbiGabSdpABFl-MlHQHaHa?pid=Api&P=0&h=180" },
];

const PopularProducts = () => {
  return (
    <section className="products" id="products">
      <h2>🌟 Popular Products</h2>
      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
