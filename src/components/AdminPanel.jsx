import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import supabase from './supabaseClient';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    product_image: '',
  });
  const fileInputRef = useRef(null);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) toast.error(`Error fetching products:', ${error.message}`);
    else setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

      setFormData({
        name: '', description: '', price: '', product_image: '',
      });
      fileInputRef.current.value = '';
      setEditingProduct(null);
      await fetchProducts();
    } catch (error) {
      toast.error(`Error saving product:', ${error.message}`);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      product_image: product.product_image,
    });
  };

  const handleDelete = async (productId) => {
    if (toast.warning('Are you sure you want to delete this product?')) {
      try {
        const { error } = await supabase
          .from('products')
          .delete()
          .eq('id', productId);

        if (error) throw error;
        await fetchProducts();
      } catch (error) {
        toast.error(`Error deleting product:, ${error.message}`);
      }
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      // Delete old image if editing
      if (editingProduct?.product_image) {
        const oldImagePath = editingProduct.product_image.split('product_image/')[1];
        await supabase.storage
          .from('product_image')
          .remove([oldImagePath]);
      }

      // Upload new image
      const fileName = `${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from('product_image')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('product_image')
        .getPublicUrl(fileName);

      setFormData((prev) => ({
        ...prev,
        product_image: publicUrl,
      }));
    } catch (error) {
      toast.error(`Upload error:, ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const getButtonText = () => {
    if (isUploading) {
      return 'Uploading...';
    }
    if (editingProduct) {
      return 'Update Product';
    }
    return 'Add Product';
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>

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
          <img
            src={formData.product_image}
            alt="Preview"
          />
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

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>
              Price: GH₵
              {product.price}
            </p>
            <div className="admin-actions">
              <button type="button" onClick={() => handleEdit(product)}>Edit</button>
              <button type="button" onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
