import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundStyles } from './styled';

export default function NotFound() {
  return (
    <NotFoundStyles>
      <>
        <h1>Pagina nao encontrada</h1>
        <Link to="/">Voltar para home</Link>
        <div id="div_img">
          <img src="https://i.makeagif.com/media/1-11-2018/qvDcey.gif" alt="Gordinho dançando" />
        </div>
      </>
      <h1>ZICOU</h1>
    </NotFoundStyles>
  );
}
