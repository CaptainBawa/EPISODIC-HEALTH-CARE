import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import supabase from './supabaseClient';

const AdminPanel = () => {
  // State for products, orders, editing, uploading, etc.
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    product_image: '',
  });
  const fileInputRef = useRef(null);

  // State for active section: "addProduct", "modifyProduct", or "orders"
  const [activeSection, setActiveSection] = useState('addProduct');

  // Fetch products from Supabase
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) toast.error(`Error fetching products: ${error.message}`);
    else setProducts(data);
  };

  // Fetch orders from Supabase
  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        products ( name )
      `)
      .order('created_at', { ascending: false });
    if (error) {
      toast.error(`Error fetching orders: ${error.message}`);
    } else {
      setOrders(data);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch orders when the orders section is activated
  useEffect(() => {
    if (activeSection === 'orders') {
      fetchOrders();
    }
  }, [activeSection]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission for both adding and updating a product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingProduct) {
        // Update existing product
        const { error } = await supabase
          .from('products')
          .update(formData)
          .eq('id', editingProduct.id);
        if (error) throw error;
      } else {
        // Create new product
        const { error } = await supabase
          .from('products')
          .insert([formData]);
        if (error) throw error;
      }

      // Reset form and refetch products
      setFormData({
        name: '', description: '', price: '', product_image: '',
      });
      if (fileInputRef.current) fileInputRef.current.value = '';
      setEditingProduct(null);
      await fetchProducts();
    } catch (error) {
      toast.error(`Error saving product: ${error.message}`);
    }
  };

  // Prepopulate form for editing a product and show modal popup
  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      product_image: product.product_image,
    });
  };

  // Delete a product (with confirmation)
  const handleDelete = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const { error } = await supabase
          .from('products')
          .delete()
          .eq('id', productId);
        if (error) throw error;
        await fetchProducts();
      } catch (error) {
        toast.error(`Error deleting product: ${error.message}`);
      }
    }
  };

  // Handle image uploads to Supabase Storage
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      // If editing, remove the old image first
      if (editingProduct?.product_image) {
        const oldImagePath = editingProduct.product_image.split('product_image/')[1];
        await supabase.storage.from('product_image').remove([oldImagePath]);
      }

      // Upload new image
      const fileName = `${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from('product_image')
        .upload(fileName, file);
      if (uploadError) throw uploadError;

      // Get public URL for the uploaded image
      const { data: { publicUrl } } = supabase.storage
        .from('product_image')
        .getPublicUrl(fileName);
      setFormData((prev) => ({
        ...prev,
        product_image: publicUrl,
      }));
    } catch (error) {
      toast.error(`Upload error: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const { error } = await supabase
        .from('orders')
        .update({ status: newStatus })
        .eq('id', orderId);

      if (error) throw error;

      toast.success('Order status updated successfully!');
      fetchOrders(); // Refresh the orders list
    } catch (error) {
      toast.error(`Error updating status: ${error.message}`);
    }
  };

  // Determine button text based on upload state and whether editing
  const getButtonText = () => {
    if (isUploading) return 'Uploading...';
    return editingProduct ? 'Update Product' : 'Add Product';
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>

      {/* Navigation buttons */}
      <div className="admin-navigation">
        <button type="button" onClick={() => setActiveSection('addProduct')}>
          Add Product
        </button>
        <button type="button" onClick={() => setActiveSection('modifyProduct')}>
          Modify Product
        </button>
        <button type="button" onClick={() => setActiveSection('orders')}>
          Orders
        </button>
      </div>

      {/* Section for Adding a Product */}
      {activeSection === 'addProduct' && (
        <div className="section add-product">
          <h3>Add Product</h3>
          <form onSubmit={handleSubmit} className="product-form">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
            {formData.product_image && (
              <img src={formData.product_image} alt="Preview" style={{ maxWidth: '200px' }} />
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              accept="image/*"
              required={!editingProduct}
            />
            <button type="submit" disabled={isUploading}>
              {getButtonText()}
            </button>
          </form>
        </div>
      )}

      {/* Section for Modifying a Product */}
      {activeSection === 'modifyProduct' && (
        <div className="section modify-product">
          <h3>Modify Product</h3>
          <div className="product-list">
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-details">
                  <div>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <p>
                      Price: GH₵
                      {product.price}
                    </p>
                  </div>
                  <img src={product.product_image} alt={product.name} />
                </div>
                <div className="modify-options">
                  <button type="button" onClick={() => handleEdit(product)}>
                    Edit
                  </button>
                  <button type="button" onClick={() => handleDelete(product.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Orders Section */}
      {activeSection === 'orders' && (
        <div className="section orders">
          <h3>Orders</h3>
          <button type="button" onClick={fetchOrders}>
            Refresh Orders
          </button>
          {orders.length > 0 ? (
            <div className="orders-table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product Ordered</th>
                    <th>Order Status</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Customer Name</th>
                    <th>Customer Address</th>
                    <th>Customer Phone</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.products ? order.products.name : 'N/A'}</td>
                      <td>
                        <select
                          value={order.status}
                          onChange={(e) => handleStatusChange(order.id, e.target.value)}
                          className="status-select"
                        >
                          <option value="pending">Pending</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                      <td>{order.quantity}</td>
                      <td>
                        GH₵
                        {' '}
                        {order.total}
                      </td>
                      <td>{order.customer_name}</td>
                      <td>{order.customer_address}</td>
                      <td>{order.customer_phone}</td>
                      <td>{new Date(order.created_at).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      )}

      {/* Modal Popup for Editing a Product */}
      {editingProduct && (
        <div className="admin-modal-overlay">
          <div className="modal-content">
            <button type="button" className="modal-close" onClick={() => setEditingProduct(null)}>
              &times;
            </button>
            <h4>Edit Product</h4>
            <form onSubmit={handleSubmit} className="product-form">
              <label htmlFor="name">
                Product Name
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label htmlFor="description">
                Product Description
                <textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label htmlFor="price">
                Product Price
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </label>
              {formData.product_image && (
                <img src={formData.product_image} alt="Preview" />
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
              />
              <button type="submit" disabled={isUploading}>
                {getButtonText()}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
