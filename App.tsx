//Mettez à jour ce fichier dans src/.
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import InputForm from './routes/form/InputForm';
import OutputPage from './routes/form/OutputPage';
import Home from './routes/home/Home';
import Documentation from './routes/documentation/Documentation';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form/input" element={<InputForm />} />
        <Route path="/form/output" element={<OutputPage />} />
        <Route path="/documentation" element={<Documentation />} />
        {/* Ajoutez d'autres routes ici si nécessaire */}
      </Routes>
    </Router>
  );
}

export default App;
