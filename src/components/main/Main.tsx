import React from 'react';
import './main.css';
import Search from '../searche/Search';
import Card from '../card/Card';
import Baner from '../baner/Baner';
import Faq from '../faq/Faq';

const Main: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Поиск:', query);
    // todo: добавить логику обработки запроса
  };


  const cardsData = [
    { title: 'Карточка 1', description: 'Описание карточки 1' },
    { title: 'Карточка 2', description: 'Описание карточки 2' },
    { title: 'Карточка 3', description: 'Описание карточки 3' },
    { title: 'Карточка 4', description: 'Описание карточки 4' },
    { title: 'Карточка 5', description: 'Описание карточки 5' },
    { title: 'Карточка 6', description: 'Описание карточки 6' },
  ];

  return (
    <main className="main">
      <div className="block__up">
        <Baner />
      </div>
      <div className="block__midle">
        <h1>Catalog</h1>
        <Search onSearch={handleSearch} />
        <div className="card-grid">
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </div>

      <div className="block__down">
        <Faq />
      </div>
    </main>
  );
};
export default Main;