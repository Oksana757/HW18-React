
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={
            <div>
              <h1>Домашняя страница</h1>
              <p>Перейдите в раздел Контакты</p>
            </div>
          } />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;