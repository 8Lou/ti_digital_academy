import React from 'react';
import './main.css';
import Search from '../searche/Search';

const Main: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log('Поиск:', query);
    // todo: добавить логику обработки запроса
};
  return (
    <main className="main">
    <div className="block__up"></div>
    <div className="block__down">
<h1>Catalog</h1>
<Search onSearch={handleSearch} />
</div>
    </main>
  );
};
export default Main;