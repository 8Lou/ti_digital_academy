import React, { useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';
import './catalog.css';
import Search from '../searche/Search';
import Card from '../card/Card';
import Baner from '../baner/Baner';
import Faq from '../faq/Faq';
import Button from '../button/Button';
import Layout from '../layout/Layout';
import  {Product} from  '../../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types';
import { selectCart } from '../../store/selectors';

interface CatalogProps {
  cart: ReturnType<typeof selectCart> | null;
}

const Catalog: React.FC<CatalogProps> = () => {

  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState('');
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const cart = useSelector((state: RootState) => state.cart.cart);

  const fetchProducts = useCallback(async () => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=12&skip=${skip}`);
    const data = await response.json();

    setProducts(prev => skip === 0 ? data.products : [...prev, ...data.products]);
    setTotal(data.total);
  }, [query, skip]);

  useEffect(() => {
    const debounceFetch = debounce(fetchProducts, 300);
    debounceFetch();

    return () => {
      debounceFetch.cancel();
    };
  }, [fetchProducts, query, skip]);

  const debouncedSearch = useCallback(
    debounce((newQuery: string) => {
      setQuery(newQuery);
      setSkip(0);
    }, 300),
    []
  );

  const handleSearch = (newQuery: string) => {
    debouncedSearch(newQuery);
  };

  const handleShowMore = () => {
    setSkip(prev => prev + 12);
  };

  return (
    <>
      <Baner />
      <Layout>

        <div className="catalog">

          <h1 className='catalog__title' id="catalog">Catalog</h1>

          <Search onSearch={handleSearch} />

          <div className="catalog__card-grid">
            {products.map((product: Product) => (
              <Card key={product.id} product={product} cart={cart} setCart={() => {}} />
            ))}
          </div>

          {products.length < total && (
            <div className="catalog__button">
              <Button className='catalog__button-show' label="Show more" onClick={handleShowMore} />
            </div>
          )}

        </div>

      </Layout>
      <Faq />

    </>
  );
};

export default Catalog;