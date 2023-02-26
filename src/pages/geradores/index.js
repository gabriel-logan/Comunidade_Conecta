import React, { useState } from 'react';

import { HiOutlineIdentification } from 'react-icons/hi';
import { MdContentCopy } from 'react-icons/md';
import { GrClearOption } from 'react-icons/gr';
import { GoUnverified } from 'react-icons/go';
import { AiFillCheckCircle } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';
import { generate, validate } from 'gerador-validador-cpf';
import { CgPlayButtonR } from 'react-icons/cg';
import { ImPaste } from 'react-icons/im';

import { toast } from 'react-toastify';
import { GeradoresStyles } from './styled';

export default function Geradores() {
  const [cpfGerado, setCpfGerado] = useState('');

  const geraCpf = (e) => {
    e.preventDefault();
    const com = document.querySelector('#com');

    if (com.checked) {
      setCpfGerado(generate({ format: true }));
    } else {
      setCpfGerado(generate());
    }
  };

  const [cpfValidado, setCpfValidado] = useState('');
  const [isValid, setIsValid] = useState(undefined);

  const validaCpf = (e) => {
    e.preventDefault();
    let errors = false;

    if (cpfValidado.length < 1 || cpfValidado.length > 14) {
      errors = true;
      toast.info('Isso não é um cpf');
    }

    if (errors) return;

    if (validate(cpfValidado)) {
      setIsValid(true);
      toast.success('CPF É VALIDO');
    } else {
      setIsValid(false);

      toast.error('CPF NÃO É VALIDO');
    }
  };

  const [copiado, setCopiado] = useState(false);

  const [limpo, setLimpo] = useState(false);
  const [validLimpo, setValidLimpo] = useState(false);

  const paste = async () => {
    const response = await navigator.clipboard.readText();

    setCpfValidado(response);
  };
  const clean = () => {
    setCpfGerado('');
    setTimeout(() => {
      setLimpo(false);
    }, 1000);
    setLimpo(true);
  };
  const cleanValidador = () => {
    setCpfValidado('');
    setTimeout(() => {
      setValidLimpo(false);
    }, 1000);
    setValidLimpo(true);
  };
  const copy = () => {
    const outPut = document.querySelector('#geradoValue');
    outPut.select();
    navigator.clipboard.writeText(cpfGerado);
    setTimeout(() => {
      setCopiado(false);
    }, 1000);
    setCopiado(true);
  };
  return (
    <GeradoresStyles>
      <div id="cpf">
        <div id="gerador">
          <h1>
            Gerador Cpf
            {' '}
            <HiOutlineIdentification />
          </h1>
          <div id="formGerador">
            <div id="titleGerador">
              <p>Com ou sem pontuação ?</p>
              <label htmlFor="sem">
                Sem
                <input type="radio" id="sem" name="selected" defaultChecked />
              </label>
              <label htmlFor="com">
                Com
                <input type="radio" id="com" name="selected" />
              </label>
            </div>
            <div>
              <form onSubmit={geraCpf}>
                <input id="geradoValue" value={cpfGerado} readOnly />
                <button type="submit" aria-label="as">
                  Gerar
                  {' '}
                  <CgPlayButtonR />
                </button>
              </form>
            </div>
            <span>{copiado ? 'Copiado' : ''}</span>
            <span>{limpo ? 'Limpo' : ''}</span>
            <div id="iconesOptions">
              <MdContentCopy onClick={copy} size={32}>
                <button type="button">Copiar</button>
              </MdContentCopy>
              <GrClearOption onClick={clean} size={32}>
                <button type="button">Limpar</button>
              </GrClearOption>
            </div>
          </div>
        </div>
        <div id="validador">
          <h1>
            Validador de CPF
            {' '}
            <GoUnverified />
          </h1>
          <div>
            <p>Cole aqui o CPF: </p>
            <form onSubmit={validaCpf}>
              <input value={cpfValidado} onChange={(e) => { setCpfValidado(e.target.value); }} />
              <button type="submit">Avaliar</button>
            </form>
            <span>{validLimpo ? 'Limpo' : ''}</span>
            <GrClearOption onClick={cleanValidador} size={32}>
              <button type="button">Limpar</button>
            </GrClearOption>
            <ImPaste onClick={paste} size={32} />
            <div>
              {isValid === undefined ? ('') : (
                <div>
                  {isValid ? (
                    <>
                      <h3 id="green">Valido</h3>
                      <AiFillCheckCircle color="green" />
                    </>
                  ) : (
                    <>
                      <h3 id="red">Invalido</h3>
                      <FaTimesCircle color="red" />
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <a href="https://www.situacao-cadastral.com/" target="_blank" rel="noreferrer">
          <img
            width="400px"
            src="./cpf.png"
            alt="siteParaValidar"
          />
        </a>
      </div>
    </GeradoresStyles>
  );
}
