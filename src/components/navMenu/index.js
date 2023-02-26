import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalculator } from 'react-icons/fa';
import { FiAlignJustify } from 'react-icons/fi';
import { AiOutlineClose, AiFillHome } from 'react-icons/ai';
import { VscGistSecret } from 'react-icons/vsc';
import { SiSmartthings } from 'react-icons/si';
import { GoDatabase } from 'react-icons/go';

import { NavMenuStyle } from './styled';

export default function NavMenu() {
  const [navClosed, setNavClosed] = useState(false);

  const closeMenu = () => {
    setNavClosed(!navClosed);

    const navOculta = document.querySelector('#nav_oculta');
    navOculta.style.transition = '.5s';

    if (navClosed) {
      navOculta.style.transform = 'translateX(-100%)';
    } else {
      navOculta.style.transform = 'translateX(0)';
    }
  };
  return (
    <NavMenuStyle id="nav_menu">
      <div id="div_nav">
        <nav>
          <Link to="/">
            <h3>Pagina inicial</h3>
          </Link>
          <Link to="/calculadoras">
            <h3>Calculadoras</h3>
          </Link>
          <Link to="/criptografia">
            <h3>Criptografia</h3>
          </Link>
          <Link to="/geral">
            <h3>Programas em geral</h3>
          </Link>
          <Link to="/geradores">
            <h3>Geradores</h3>
          </Link>
        </nav>
      </div>
      <div id="div_navBar">
        <FiAlignJustify id="openMenu" onClick={closeMenu} size={32} color="white" />
        <nav id="nav_oculta">
          <AiOutlineClose id="closeMenuX" onClick={closeMenu} size={32} color="white" />
          <Link className="closeMenu" onClick={closeMenu} to="/">
            <AiFillHome size={24} color="white" />
            <h3>Pagina inicial</h3>
          </Link>
          <Link className="closeMenu" onClick={closeMenu} to="/calculadoras">
            <FaCalculator size={24} color="white" />
            <h3>Calculadoras</h3>
          </Link>
          <Link className="closeMenu" onClick={closeMenu} to="/criptografia">
            <VscGistSecret size={24} color="white" />
            <h3>Criptografia</h3>
          </Link>
          <Link className="closeMenu" onClick={closeMenu} to="/geral">
            <SiSmartthings size={24} color="white" />
            <h3>Programas em geral</h3>
          </Link>
          <Link className="closeMenu" onClick={closeMenu} to="/geradores">
            <GoDatabase size={24} color="white" />
            <h3>Geradores</h3>
          </Link>
        </nav>
      </div>
    </NavMenuStyle>
  );
}
