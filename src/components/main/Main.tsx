import React from 'react';
import './main.css';
import Search from '../searche/Search';
import Card from '../card/Card';
import Baner from '../baner/Baner';
import Faq from '../faq/Faq';
import Button from '../button/Button';

const Main: React.FC = () => {
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
    <main className="main">

      <div className="block__up">
        <Baner />
      </div>

      <div className="block__midle">

        <h1 className='catalog'>Catalog</h1>

        <Search onSearch={handleSearch} />

        <div className="card__grid">
          {cardsData.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>
        <div className="button__show">
          <Button className='button' label="Show more" onClick={handleClick} />
        </div>
      </div>

      <div className="block__down">
        <Faq />
      </div>

    </main>
  );
}; export default Main;