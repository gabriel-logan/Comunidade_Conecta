/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { BsArrowRightCircleFill } from 'react-icons/bs';

import { CalculadorasStyles } from './styled';

import CalculaImc from './calculaImc';
import CalculadoraPadrao from './calculaPadrao';
import CalculadoraFinanceira from './calcFinanceir';

export default function Calculadoras() {
  const [whichCalc, setWhichCalc] = useState(1);

  const next = () => {
    const imcDiv = document.querySelector('#imc');
    const padraoDiv = document.querySelector('#calc_padrao');
    const financeiraDiv = document.querySelector('#calc_financeira');
    setWhichCalc(whichCalc + 1);

    if (whichCalc > 1) {
      setWhichCalc(0);
    }

    if (whichCalc === 0) {
      imcDiv.style.display = 'flex';
    } else {
      imcDiv.style.display = 'none';
    }
    if (whichCalc === 1) {
      padraoDiv.style.display = 'block';
    } else {
      padraoDiv.style.display = 'none';
    }
    if (whichCalc === 2) {
      financeiraDiv.style.display = 'flex';
    } else {
      financeiraDiv.style.display = 'none';
    }
  };

  return (
    <CalculadorasStyles>
      <div id="tituloPagina">
        <div>
          <p>Proxima</p>
          <BsArrowRightCircleFill onClick={next} size={32} />
        </div>
      </div>
      <CalculaImc />
      <CalculadoraPadrao />
      <CalculadoraFinanceira />
    </CalculadorasStyles>
  );
}
