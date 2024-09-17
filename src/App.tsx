import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import OneProduct from './pages/oneProduct';
import Cart from './pages/myCart';
import Undefined from './pages/404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<OneProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/undefined" element={<Undefined />} />
      </Routes>
    </Router>
  );
}

export default App;