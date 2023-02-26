import styled from 'styled-components';

export const NavMenuStyle = styled.nav`
  position: relative;
  #div_nav{
    display: flex;
    background-color: #62008f;
    width: 100%;
    height: 50px;
    border-top: 5px solid black;
    nav{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      a{
        color: #ede8f6;
        text-decoration: none;
        &:hover{
          border-top: 5px solid black;
          color: #200058;
          background-color: white;
        }
        h3{
          margin-inline: 5px;
        }
      }
    }
  }
  #nav_oculta{
    transform: translateX(-100%);
    display: none;
  }
  @media (max-width: 650px) {
    #div_nav{
      display: none;
    }
    #div_navBar{
      background-color: #62008f;
      width: 100%;
      height: 50px;
      border-top: 5px solid black;
      margin-bottom: 1rem;

      #openMenu{
        position: relative;
        top: 10px;
        left: 10px;
        cursor: pointer;
      }
      #closeMenuX{
        position: relative;
        top: 10px;
        left: 10px;
        cursor: pointer;
        margin-bottom: 10px;
      }
      #nav_oculta{
        position: absolute;
        top: 5px;
        z-index: 10;
        background-color: #060a25;
        width: 100%;
        height: 100vh;
        display: block;
          .closeMenu{
          color: #ede8f6;
          text-decoration: none;
          display: flex;
          margin-top: 25px;
          margin-left: 20px;
          cursor: pointer;
          &:hover{
            color: #200058;
            background-color: #3498db;
            padding: 20px;
            border-radius: 4px;
          }
          h3{
            margin: 0;
            margin-left: 20px;
          }
        }
      }
    }
  }
`;
