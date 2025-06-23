import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import homePage from './pages/homePage';
import Login from './pages/login';
import Callback from './pages/Callback';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<homePage />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="/callback" element={<Callback onSuccess={() => setIsAuthenticated(true)} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;