/* eslint-disable no-unused-vars */
import React from 'react';

import FinaceiraStyles from './styled';

import JurosSimples from './jurosSimples';
import JurosComposto from './jurosComposto';
import Rendimento from './rendimento';

export default function CalculadoraFinanceira() {
  const escolheCalc = () => {
    const juroSimples = document.querySelector('#juro_simples');
    const juroComposto = document.querySelector('#juro_composto');
    const rendimento = document.querySelector('#rendimento');
    const selectCalc = document.querySelector('#selectCalc');

    if (selectCalc.value === '1') {
      juroSimples.style.display = 'block';
    } else {
      juroSimples.style.display = 'none';
    }
    if (selectCalc.value === '2') {
      juroComposto.style.display = 'block';
    } else {
      juroComposto.style.display = 'none';
    }
    if (selectCalc.value === '3') {
      rendimento.style.display = 'block';
    } else {
      rendimento.style.display = 'none';
    }
  };

  return (
    <FinaceiraStyles id="calc_financeira">
      <div>
        <h1>Calculadora Financeira</h1>
      </div>
      <div id="select">
        <select id="selectCalc" onChange={escolheCalc}>
          <option value="0">Seleciona qual função quer calcular !</option>
          <option value="1">Juros Simples</option>
          <option value="2">Juros Composto</option>
          <option value="3">Rendimento</option>
        </select>
      </div>
      <JurosSimples />
      <JurosComposto />
      <Rendimento />
    </FinaceiraStyles>
  );
}
