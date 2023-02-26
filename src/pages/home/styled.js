import styled from 'styled-components';

export const HomeStyles = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  #div_seta{
    height: 100px;
    .setas{
    cursor: pointer;
    position: relative;
    top: 0;
    z-index: 5;
    &:active{
      transform: scale(1.1);
    }
  }

  .right{
    right: 0px;
  }
  }

  .discord{
    display: flex;
    justify-content: center;
    width: 90%;
    height: 500px;
    iframe{
      width: 90%;
      height: 500px;
      border-radius: 4px;
    }
  }
  .gitHub{
    display: none;
    position: relative;
    height: 350px;
    .setasGit{
      display: none;
    }
    .leftGit{
      left: 0;
    }
    .rightGit{
      right: 0;
    }
    .profile_styles{
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-inline: 15px;
      border: 1px solid #6f6f8596;
      padding: 15px;
      border-radius: 4px;
      div{
        a{
          font-size: 1.5rem;
          text-decoration: none;
          &:hover{
            text-decoration: underline;
          }
        }
        img{
          width: 128px;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .gitHub{
      .setasGit{
      display: block;
      position: absolute;
      top: 40%;
      cursor: pointer;
    }
    }
    #logan{
      display: flex;
    }
    #sayseven{
      display: none;
    }
    #matheus{
      display: none;
    }
  }
  .youtube{
    display: none;
    #ocultoNaUltima{
      display: none;
    }
    #title{
      margin-left: 10%;
    }
    #div_foto-gira{
      img{
        margin: 50px;
        animation-name: giradorFoto;
        animation-duration: 7s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        width: 40%;
      }
    }
    @keyframes giradorFoto {
      from{
        transform: rotateZ(0);
      }
      to{
        transform:  rotateZ(360deg);
      }
    }
  }
`;
