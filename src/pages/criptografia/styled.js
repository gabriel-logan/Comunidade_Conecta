import styled from 'styled-components';

export const CriptografiaStyles = styled.section`
  #red{
    color: red;
  }
  #black{
    color: black;
  }
  #base64{
    border: 1px solid #102326d9;
    margin-inline: 15px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    #subDiv{
      div{
        textarea{
          width: 250px;
          height: 140px;
          resize: none;
          outline: none;
          border: 1px solid rgb(130, 122, 241);
          padding: 10px;
          font-size: 1.25rem;
          border-radius: .5rem;
          font-family: "Open Sans", sans-serif;
          background-color:#ecf5f5;
          &:focus {
              background-color: rgb(250, 247, 242);
              border: 1px solid rgb(255, 131, 131);
          }
          &::-webkit-scrollbar {
              width: 12px;
          }
          &::-webkit-scrollbar-thumb {
              background: linear-gradient(transparent, #30ff00);
              border-radius: 6px;
          }
          &::-webkit-scrollbar:hover {
              background: linear-gradient(transparent, #006affa9, transparent);
          }
        }
      }
      #div_cripto{
        display: flex;
        justify-content: space-evenly;
        button{
            border: 1px solid #d9bcbc;
            border-radius: 2px;
            margin-bottom: 5px;
            font-size: 1.3rem;

        }
      }
      #div_option{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 15px;
        svg{
          cursor: pointer;
          &:active{
            transform: scale(1.1);
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    #base64{
      border-radius: 10%;
      margin-inline: 25px;
      #subDiv{
        #div_cripto{
          button{
            font-size: 1rem;
          }
        }
      }
    }
  }
  @media (max-width: 350px) {
    #base64{
      margin-inline: 20px;
      #subDiv{
        #div_cripto{
          button{
            font-size: 0.9rem;
          }
        }
        div{
          textarea{
            width: 180px;
          }
        }
      }
    }
  }
`;
