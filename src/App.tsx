<<<<<<< HEAD
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import OneProduct from './pages/oneProduct';
import Cart from './pages/myCart';
import Undefined from './pages/404';
=======
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
>>>>>>> 036ca02066aa69ce9bc91621e8e38b5430c89519

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;