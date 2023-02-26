import styled from 'styled-components';

export const GeralStyles = styled.section`
  #cronometro{
    border: 1px solid;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    margin: auto;
    padding: 5px;
    div{
      h1{
        color: #050533;
        text-align: center;
        font-size: 2.5rem;
        font-family: 'Times New Roman', Times, serif;
        text-shadow: 1px 1px 2px white;
        margin: 10px 0px;
        text-transform: uppercase;
      }
      h2{
        color: #050533;
        text-align: center;
        font-size: 3.5rem;
        font-family: 'Times New Roman', Times, serif;
        text-shadow: 1px 1px 2px white;
        margin-bottom: 10px;
        margin-top: 0;
        text-transform: uppercase;
      }
      svg{
        font-size: 54px;
        cursor: pointer;
        margin-inline: 2px;
        &:active{
          transform: scale(1.1);
        }
      }
    }
  }
  @media (max-width: 600px) {
      #cronometro{
      width: 250px;
      div{
        h1{
          font-size: 2rem;
        }
        h2{
          font-size: 3rem;
        }
        svg{
          font-size: 42px;
        }
      }
    }
  }
  @media (max-width: 400px) {
    #cronometro{
      width: 220px;
      div{
        h1{
          font-size: 1.5rem;
        }
        h2{
          font-size: 2.5rem;
        }
        svg{
          font-size: 32px;
        }
      }
    }
  }
`;
