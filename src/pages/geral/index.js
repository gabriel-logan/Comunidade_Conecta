/* eslint-disable no-unused-vars */
import React from 'react';

import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';
import { GeralStyles } from './styled';

export default function Geral() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC',
    });
  }

  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    const relogio = document.querySelector('#conometro');

    timer = setInterval(() => {
      segundos += 1;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  const start = () => {
    const relogio = document.querySelector('#conometro');
    relogio.style.color = 'black';
    clearInterval(timer);
    iniciaRelogio();
  };
  const stop = () => {
    const relogio = document.querySelector('#conometro');
    relogio.style.color = 'red';
    clearInterval(timer);
  };
  const zera = () => {
    const relogio = document.querySelector('#conometro');
    relogio.style.color = 'black';
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
  };

  return (
    <GeralStyles>
      <div id="cronometro">
        <div>
          <h1>Cronômetro</h1>
        </div>
        <div>
          <h2 id="conometro">00:00:00</h2>
        </div>
        <div>
          <AiOutlinePlayCircle onClick={start} className="tamanho_icons" />
          <AiOutlinePauseCircle onClick={stop} className="tamanho_icons" />
          <BiReset onClick={zera} className="tamanho_icons" />
        </div>
      </div>
    </GeralStyles>
  );
}
