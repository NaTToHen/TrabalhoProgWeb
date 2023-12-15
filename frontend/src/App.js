import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';
import Login from './components/login/Login.js';
import Read from './components/crud/Read.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/read" element={<Read />} />
      </Routes>
    </Router>
  )
}

export default App;
