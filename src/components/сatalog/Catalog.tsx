import React from 'react';
import './catalog.css';
import Search from '../searche/Search';
import Card from '../card/Card';
import Baner from '../baner/Baner';
import Faq from '../faq/Faq';
import Button from '../button/Button';
import Layout from '../layout/Layout';

const Catalog: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Поиск:', query);
    // todo: добавить логику обработки запроса
  };

  const cardsData = Array.from({ length: 12 }, () => ({
    title: `Essence Mascara Lash Princess`,
    description: `$110`,
  }));

  const handleClick = () => {
    // добавить логику для обработки нажатия кнопки
  };

  // todo: доработать логику
  // const cardsData = Array.from({ length: 12 }, (_, index) => ({
  //   title: `Essence Mascara Lash Princess ${index + 1}`,
  //   description: `$110 ${index + 1}`,
  // }));
  // заменить index на id?

  return (
    <>
      <Baner />
      <Layout>

        <div className="catalog">

          <h1 className='catalog__title' id="catalog">Catalog</h1>

          <Search onSearch={handleSearch} />

          <div className="catalog__card-grid">
            {cardsData.map((card, index) => (
              <Card key={index} id={index.toString()} title={card.title} description={card.description} />
            ))}
          </div>

          <div className="catalog__button">
            <Button className='catalog__button-show' label="Show more" onClick={handleClick} />
          </div>

        </div>

      </Layout>
      <Faq />

    </>
  );
};

export default Catalog;