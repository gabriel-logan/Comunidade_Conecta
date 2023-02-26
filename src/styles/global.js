import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyleComponent = createGlobalStyle`
.disclaimer{
  display: none;
}
  body{
    margin: 0;
  }
  section{
    min-height: 100vh;
  }
  button{
    cursor: pointer;
  }
  .green{
    color: green;
  }
  .red{
    color: red;
  }
  .black{
    color: black;
  }
`;

export default GlobalStyleComponent;
