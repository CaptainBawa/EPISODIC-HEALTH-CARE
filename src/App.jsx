import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Toast from './components/ToastContainer';
import MainLayout from './components/MainLayout';
import AdminPanel from './components/AdminPanel';

const App = () => (
  <BrowserRouter>
    <Toast />
    <Routes>
      <Route path="/" element={<MainLayout />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  </BrowserRouter>
);

export default App;
