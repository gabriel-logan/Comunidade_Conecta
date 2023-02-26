/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import { BsPersonCircle, BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { HomeStyles } from './styled';

export default function Home() {
  const [nextSession, setNextSession] = useState(1);
  const [toProfile, setToProfile] = useState(1);

  const toNextSession = () => {
    setNextSession(nextSession + 1);

    const discord = document.querySelector('.discord');
    const gitHub = document.querySelector('.gitHub');
    const youtube = document.querySelector('.youtube');

    if (nextSession > 1) {
      setNextSession(0);
    }

    if (nextSession === 0) {
      discord.style.display = 'flex';
    } else {
      discord.style.display = 'none';
    }

    if (nextSession === 1) {
      gitHub.style.display = 'flex';
    } else {
      gitHub.style.display = 'none';
    }

    if (nextSession === 2) {
      youtube.style.display = 'flex';
    } else {
      youtube.style.display = 'none';
    }
  };

  const nextProfile = () => {
    setToProfile(toProfile + 1);
    const logan = document.querySelector('#logan');
    const sayseven = document.querySelector('#sayseven');
    const matheus = document.querySelector('#matheus');

    if (toProfile > 1) {
      setToProfile(0);
    }

    if (toProfile === 0) {
      logan.style.display = 'flex';
    } else {
      logan.style.display = 'none';
    }

    if (toProfile === 1) {
      sayseven.style.display = 'flex';
    } else {
      sayseven.style.display = 'none';
    }

    if (toProfile === 2) {
      matheus.style.display = 'flex';
    } else {
      matheus.style.display = 'none';
    }
  };

  return (
    <HomeStyles>
      <h2 id="ocultoNaUltima">TEM MAIS COISAS PRA LA ------------&gt;&gt;&gt;&gt; Clica na seta la em baixo</h2>
      <div className="discord">
        <iframe title="Chat da comunidade" src="https://e.widgetbot.io/channels/862474064684515379/862912827236679681" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
      </div>
      <div className="gitHub">
        <BsArrowRightCircle size={32} onClick={nextProfile} className="setasGit rightGit" />
        <div id="logan" className="profile_styles">
          <div>
            <BsPersonCircle size={128} />
          </div>
          <div><h1>Gabriel Logan</h1></div>
          <div><p>Desenvolvedor Full Stack</p></div>
          <div>
            <a href="https://github.com/gabriel-logan" target="_blank" rel="noreferrer">Acessar perfil</a>
          </div>
        </div>
        <div id="sayseven" className="profile_styles">
          <div>
            <img src="./32224876.jpg" alt="SayFoto" />
          </div>
          <div><h1>Say Seven</h1></div>
          <div><p>Etical Hacker</p></div>
          <div>
            <a href="https://github.com/sayseven7" target="_blank" rel="noreferrer">Acessar perfil</a>
          </div>
        </div>
        <div id="matheus" className="profile_styles">
          <div>
            <img src="./34222818.jpg" alt="Mateus foto" />
          </div>
          <div><h1>Matheus Cyber</h1></div>
          <div><p>Consultor, Etical Hacker</p></div>
          <div>
            <a href="https://github.com/g0nc" target="_blank" rel="noreferrer">Acessar perfil</a>
          </div>
        </div>
      </div>
      <div className="youtube">
        <div id="title">
          <h1>Nosso canal do youtube</h1>
          <a href="https://www.youtube.com/c/ComunidadeConecta/videos" target="_blank" rel="noreferrer">
            <AiFillYoutube size={128} alt="youtube chaneç" />
          </a>
        </div>
        <div id="div_foto-gira">
          <a href="https://www.youtube.com/c/ComunidadeConecta/videos" target="_blank" rel="noreferrer">
            <img src="./fotoGira.png" alt="Foto canal" />
          </a>
        </div>
      </div>
      <div id="div_seta">
        <q>Proxima Pagina</q>
        <BsArrowRightCircle size={64} onClick={toNextSession} className="setas right" />
      </div>
    </HomeStyles>
  );
}
