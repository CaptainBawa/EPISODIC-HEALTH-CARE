import React, { useState } from 'react';
import manu from '../assets/manu.png';
import spakan from '../assets/spakan.png';
import lita from '../assets/lita.png';
import lippan from '../assets/lippan.png';
import buy from '../assets/buy.png';

const Products = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('1');

  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a description of product 1',
      price: 100,
      image: manu,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is a description of product 2',
      price: 200,
      image: spakan,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is a description of product 3',
      price: 200,
      image: lita,
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This is a description of product 4',
      price: 200,
      image: lippan,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedQuantity = quantity === '' ? 1 : parseInt(quantity, 10);
    // Handle form submission here (e.g., API call)
    console.log('Order Details:', {
      product: selectedProduct,
      quantity: parsedQuantity,
      total: selectedProduct.price * parsedQuantity,
      customer: { name, address, phone },
    });
    // Reset form and close modal
    setShowOrderForm(false);
    setSelectedProduct(null);
    setQuantity('1');
    setName('');
    setAddress('');
    setPhone('');
  };

  return (
    <section>
      <h2 className="pro-title">Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img className="card-img" src={product.image} alt={product.name} />
            <div className="card-info">
              <h3 className="text-title">{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <div className="price-buy">
              <p className="text-title price">
                GH₵
                {' '}
                {product.price}
              </p>
              <button
                type="button"
                className="buy-button"
                onClick={() => {
                  setSelectedProduct(product);
                  setShowOrderForm(true);
                }}
              >
                <img src={buy} alt="buy" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showOrderForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>
              Order Form -
              {selectedProduct?.name}
            </h3>
            <p className="form-price">
              Total Price: GH₵
              {' '}
              {selectedProduct?.price * (quantity === '' ? 1 : parseInt(quantity, 10))}
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="Quantity">
                  Quantity:
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => {
                      const { value } = e.target;
                      if (value === '' || /^[1-9]\d*$/.test(value)) {
                        setQuantity(value);
                      }
                    }}
                    required
                  />
                </label>
                <label htmlFor="Full Name">
                  Full Name:
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="Address">
                  Address:
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="Phone Number">
                  Phone Number:
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </label>
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Place Order
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => {
                    setShowOrderForm(false);
                    setQuantity(1);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
