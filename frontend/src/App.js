import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import Login from './components/login/Login.js';
import Read from './components/crud/Read.js';
import PaginaProduto from './components/crud/Produtos/PaginaProduto.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/read" element={<Read />} />
        <Route path="/produto/:id" element={<PaginaProduto />} />
      </Routes>
    </Router>
  )
}

export default App;
