import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';
import Routes from './routes/index';

import { AuthProvider } from './contexts/Auth';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Routes />
        <ToastContainer position="top-center" />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
