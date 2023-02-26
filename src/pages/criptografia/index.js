/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { AiFillLock, AiFillUnlock } from 'react-icons/ai';
import { BiCut } from 'react-icons/bi';
import { MdContentCopy } from 'react-icons/md';
import { ImPaste } from 'react-icons/im';
import { GrClearOption } from 'react-icons/gr';
import { Base64 } from 'js-base64';
import { CriptografiaStyles } from './styled';

export default function Criptografias() {
  const [base64Value, setBase64Value] = useState('');

  const criptografa = () => {
    const encodedString = Base64.btoa(base64Value);

    setBase64Value(encodedString);
  };

  const descriptografa = () => {
    const decodeString = Base64.atob(base64Value);

    setBase64Value(decodeString);
  };

  const [copiado, setCopiado] = useState(false);

  const copy = () => {
    const outPut = document.querySelector('textarea');
    outPut.select();
    navigator.clipboard.writeText(base64Value);
    setTimeout(() => {
      setCopiado(false);
    }, 1000);
    setCopiado(true);
  };

  const cut = () => {
    navigator.clipboard.writeText(base64Value);
    setBase64Value('');
    setTimeout(() => {
      setCopiado(false);
    }, 1000);
    setCopiado(true);
  };

  const paste = async () => {
    const response = await navigator.clipboard.readText();

    setBase64Value(base64Value + response);
  };

  const [limpo, setLimpo] = useState(false);

  const clean = () => {
    setBase64Value('');
    setTimeout(() => {
      setLimpo(false);
    }, 1000);
    setLimpo(true);
  };

  return (
    <CriptografiaStyles>
      <div id="base64">
        <h1>Logan Base64</h1>
        <div id="subDiv">
          <div id="div_cripto">
            <button onClick={criptografa} type="button">
              Encriptar
              {' '}
              <AiFillLock />
            </button>
            <button onClick={descriptografa} type="button">
              Decriptar
              {' '}
              <AiFillUnlock />
            </button>
          </div>
          <div>
            <textarea onChange={(e) => { setBase64Value(e.target.value); }} value={base64Value} />
          </div>
          <div>
            <h3>
              {base64Value.length > 0 ? (
                <span id="red">
                  {base64Value.length}
                  {' '}
                </span>
              ) : ('0 ')}
              Caracteres
            </h3>
          </div>
          <span>{copiado ? 'Copiado' : ''}</span>
          <span>{limpo ? 'Limpo' : ''}</span>
          <div id="div_option">
            <BiCut onClick={cut} size={32}>
              <button type="button">Recortar</button>
            </BiCut>
            <MdContentCopy onClick={copy} size={32}>
              <button type="button">{copiado ? ('Copiado') : ('Copiar')}</button>
            </MdContentCopy>
            <ImPaste onClick={paste} size={32}>
              <button type="button">Colar</button>
            </ImPaste>
            <GrClearOption onClick={clean} size={32}>
              <button type="button">Limpar</button>
            </GrClearOption>
          </div>
        </div>
      </div>
    </CriptografiaStyles>
  );
}
