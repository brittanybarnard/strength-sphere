import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
// import Home from '../src/pages/Home/Home.jsx';
// import LowerBody from './pages/LowerBody/LowerBody.jsx';
// import UpperBody from './pages/UpperBody/UpperBody.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="upper-body" element={<UpperBody />} />
          <Route path="lower-body" element={<LowerBody />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    <App />
  </React.StrictMode>
);
