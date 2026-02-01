import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Навигация */}
        <header className="header">
          <div className="logo">
            <h1>Спикер - магазин</h1>
          </div>
          <nav className="navigation">
            <Link to="/" className="nav-link">Главная</Link>
            <Link to="/cart" className="nav-link">Корзина</Link>
            <Link to="/contacts" className="nav-link active">Контакты</Link>
          </nav>
        </header>

        {/* Основной контент */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Добро пожаловать в магазин "Спикер"</h2>;
}

function Cart() {
  return <h2>Ваша корзина</h2>;
}

export default App;