import styled from 'styled-components';

export const GeradoresStyles = styled.section`
img{
  width: 85%;
  margin-top: 25px;
  border-radius: 4px;
}
svg{
  cursor: pointer;
  &:active{
            transform: scale(1.1);
          }
}
  #red{
    color: red;
  }
  #green{
    color: green;
  }
  #black{
    color: black;
  }
  #cpf{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 700px) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }
    div{
      margin-top: 15px;
    }
    #gerador{
      border: 1px solid #93b8bdcc;
      border-radius: 4px;
      padding: 15px;
      background-color: #f7efff;
      #formGerador{
        display: flex;
        flex-direction: column;
        align-items: center;
        div{
          form{
            input{
              font-size: 1rem;
              border: 1px solid #57aef1;
              border-radius: 5px;
              text-align: center;
              height: 32px;
              width: 200px;
            }
            button{

              height: 32px;
              border-radius: 4px;
              border: 1px solid #82aac5;
            }
          }
        }
        #titleGerador{
          display: flex;
          align-items: center;
          p{
            margin-right: 5px;
          }
          label{
            margin-inline: 5px;
          }
        }

        #iconesOptions{
          margin-top: 5px;
          svg{
            margin-inline: 15px;
          }
        }
      }
    }
    #validador{
      border: 1px solid #93b8bdcc;
      border-radius: 4px;
      padding: 15px;
      background-color: #f7efff;
      div{
        form{
          input{
              font-size: 1rem;
              border: 1px solid #57aef1;
              border-radius: 5px;
              text-align: center;
              height: 32px;
              width: 200px;
            }
            button{

              height: 32px;
              border-radius: 4px;
              border: 1px solid #82aac5;
            }
        }
      }
    }
  }
`;
