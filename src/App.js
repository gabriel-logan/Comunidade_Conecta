import React from 'react';

import { ToastContainer } from 'react-toastify';

import { BrowserRouter as Router } from 'react-router-dom';

import history from './services/history';

import GlobalStyleComponent from './styles/global';

import Header from './components/header';
import NavMenu from './components/navMenu';
// eslint-disable-next-line no-unused-vars
import Footer from './components/footer';

import ConfigRoutes from './routes';

function App() {
  return (
    <Router history={history}>
      <GlobalStyleComponent />
      <ToastContainer autoClose={2000} />
      <Header />
      <NavMenu />
      <ConfigRoutes />
      <Footer />
    </Router>
  );
}

export default App;
