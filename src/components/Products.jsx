import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import supabase from './supabaseClient';
import buy from '../assets/buy.png';

const Products = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setProducts(data);
      } catch (error) {
        toast.error(`Error fetching products:', ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const parsedQuantity = quantity === '' ? 1 : parseInt(quantity, 10);

    try {
      const { error } = await supabase
        .from('orders')
        .insert([{
          product_id: selectedProduct.id,
          quantity: parsedQuantity,
          total: selectedProduct.price * parsedQuantity,
          customer_name: name,
          customer_address: address,
          customer_phone: phone,
        }]);

      if (error) throw error;

      // Reset form and close modal
      setShowOrderForm(false);
      setSelectedProduct(null);
      setQuantity('1');
      setName('');
      setAddress('');
      setPhone('');

      toast.success('Order placed successfully!');
    } catch (error) {
      toast.error(`Error placing order: ${error.message}`);
    }
  };

  if (loading) return <div>Loading products...</div>;

  return (
    <section>
      <h2 className="pro-title">Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img className="card-img" src={product.product_image} alt={product.name} />
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

            <div className="order-note">
              <strong>Please note:</strong>
              {' '}
              We will call you at the provided phone number
              to confirm your order before processing. Payment will be made via mobile money
              after order confirmation. Ensure your phone number is correct to receive
              the payment details.
            </div>

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
