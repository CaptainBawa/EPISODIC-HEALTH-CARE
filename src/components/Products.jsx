import React from 'react';
import manu from '../assets/manu.png';
import spakan from '../assets/spakan.png';
import lita from '../assets/lita.png';
import lippan from '../assets/lippan.png';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is a description of product 1',
      price: 100,
      image: { manu },
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is a description of product 2',
      price: 200,
      image: { spakan },
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is a description of product 3',
      price: 200,
      image: { lita },
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'This is a description of product 4',
      price: 200,
      image: { lippan },
    },
  ];
  return (
    <section>
      <h2>Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img className="card-img" src={product.image} alt={product.name} />
            <div className="card-info">
              <h3 className="text-title">{product.name}</h3>
              <p>{product.description}</p>
            </div>
            <p className="text-title">
              GH₵
              {' '}
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
