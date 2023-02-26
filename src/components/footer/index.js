import React from 'react';
import { AiOutlineTwitter, AiFillLinkedin, AiOutlineCopyright } from 'react-icons/ai';
import { FaGooglePlay, FaDiscord } from 'react-icons/fa';
import { FooterStyles } from './styled';

export default function Footer() {
  return (
    <FooterStyles>
      <div id="div_icons">
        <AiOutlineTwitter size={32} />
        <a href="https://discord.gg/D4jucGzQfs" target="_blank" rel="noreferrer">
          <FaDiscord className="discord_icon" size={32} />
        </a>
        <FaGooglePlay size={32} />
        <AiFillLinkedin size={32} />
      </div>
      <div id="div_quote">
        <cite>
          <AiOutlineCopyright />
          2022 Comunidade Conecta
        </cite>
      </div>
      <cite>
        Desenvolvido por Gabriel Logan
      </cite>
    </FooterStyles>
  );
}
