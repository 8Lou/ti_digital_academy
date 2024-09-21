import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import OneProduct from './pages/oneProduct';
import Undefined from './pages/404';
import MyCart from './pages/myCart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<OneProduct />} />
        <Route path="/basket" element={<MyCart />} />
        <Route path="/undefined" element={<Undefined />} />
      </Routes>
    </Router>
  );
}

export default App;