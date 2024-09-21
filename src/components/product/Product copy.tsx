// рабочий но без Редакс

import React, { useState, useEffect } from 'react';
import './product.css';
import starIcon from '../../assets/img/Star.svg';
import inactiveStarIcon from '../../assets/img/StarRed.svg';
import Discount from '../discount/Discount';
import Layout from '../layout/Layout';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNewPrice } from '../../store/cartSlice'; 

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
  const dispatch = useDispatch();

  const handleThumbnailClick = (image: string) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            navigate('/undefined');
          }
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        if (data.images.length > 0) { 
        setSelectedImage(data.images[0]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching the product data:', error);
        setError(error);
        setLoading(false);
      });
  }, [id, navigate]);

  useEffect(() => {
    if (product) {
      document.title = product.title;
    }
  }, [product]);

  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>
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

  const totalStars = 5;
  const activeStars = Math.round(product.rating);
  const newPrice = product.price - product.price * product.discountPercentage / 100;

  // useEffect(() => {
  //   dispatch(setNewPrice(newPrice));
  // }, [newPrice, dispatch]);
  
  // useEffect(() => {
  //   dispatch(setProduct(product));
  // }, [product, dispatch]);

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
          <Discount price={product.price} discountPercentage={product.discountPercentage} newPrice={newPrice} />
        </div>
      </div>
    </Layout>
  );
};export default Product;