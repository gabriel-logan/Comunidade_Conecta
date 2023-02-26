import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home';
import Calculadoras from '../pages/calculadoras';
import Criptografia from '../pages/criptografia';
import Geradores from '../pages/geradores';
import Geral from '../pages/geral';

import NotFound from '../pages/NotFound';

export default function ConfigRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculadoras" element={<Calculadoras />} />
      <Route path="/criptografia" element={<Criptografia />} />
      <Route path="/geradores" element={<Geradores />} />
      <Route path="/geral" element={<Geral />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
