import React, { useState, useEffect } from 'react';
import './product.css';
import starIcon from '../../assets/img/Star.svg';
import inactiveStarIcon from '../../assets/img/StarRed.svg';
import Discount from '../discount/Discount';
import Layout from '../layout/Layout';
import { useParams, useNavigate } from 'react-router-dom';

interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  warrantyInformation: string;
  shippingInformation: string;
  tags: string[];
}
const Product: React.FC = () => {
  const [product, setProduct] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            navigate('/undefined');
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
        if (data.images.length > 0) { 
          setSelectedImage(data.images[0]);
        }
      } catch (error) {
        console.error('Error fetching the product data:');
        setError(new Error('Error fetching the product data'));
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  const totalStars = 5;
  const activeStars = Math.round(product?.rating || 0);
  const newPrice = product ? product.price - (product.price * product.discountPercentage / 100) : 0;
  
  useEffect(() => {
    if (product) {
      document.title = product.title;
    }
  }, [product]);
  
  if (loading) {
    return (
      <Layout>
        <div className="loader"></div>
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout>
        <div>Error loading product data: {error?.message}</div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="one__product-content">
        <div className="one__product--large">
          {selectedImage && ( 
            <img src={selectedImage} alt="Main Image" className="one__product-main-image" />
          )}
          {product.images.length > 1 && ( 
            <div className="one__product-slider">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className={`one__product-thumb ${selectedImage === image ? 'active' : ''}`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          )}
        </div>
        <div className="one__product--small">
          <h1 className="one__product-subtitle">{product.title}</h1>
          <div className="one__product-rating">
            <div className="one__product-stars">
              {[...Array(totalStars)].map((_, i) => (
                <img
                  key={i}
                  src={i < activeStars ? inactiveStarIcon : starIcon}
                  alt={`Star ${i + 1}`}
                  className={`one__product-star ${i < activeStars ? 'active' : 'inactive'}`}
                />
              ))}
            </div>
            <h5 className="one__product-star-text">{product.category}</h5>
          </div>
          <h4 className="one__product-description">
            {product.stock > 0 ? 'In Stock' : 'Out of Stock'} - Only {product.stock} left!
          </h4>
          <p className="one__product-info">{product.description}</p>
          <h5 className="one__product-warranty">Brand: {product.brand}</h5>
          <h5 className="one__product-stock">Stock: {product.stock}</h5>
          <div className="one__product-stars">
            <h5 className="one__product-warranty">Warranty: {product.warrantyInformation}</h5>
            <h5 className="one__product-ships">Shipping: {product.shippingInformation}</h5>
          </div>
          <div className="one__product-star-text">
            Tags: 
            {product.tags.map((tag, index) => (
              <span key={index} className="one__product-tag">{tag}</span>
            ))}
          </div>
          <h5 className="one__product-ships">Price: ${product.price}</h5>
          <Discount
            price={product.price}
            productId={product.id}
            discountPercentage={product.discountPercentage}
            newPrice={newPrice}
            stock={product.stock}
          />
        </div>
      </div>
    </Layout>
  );
};export default Product;