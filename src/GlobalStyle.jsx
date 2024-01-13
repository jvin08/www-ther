import  { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`

*{
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
//   border: 1px solid red; 
}
body{
  margin: 0;
  padding: 0;
}
ul{
  margin: 0;
  margin-top: 0.5rem;
  padding: 0;
}
li {
  list-style-type: none;
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 0.8rem;
  margin:0;
  padding-left: 1.5rem;
  box-sizing: border-box;
  border: 3px solid white;
  border-left: 3px solid white;
  &:hover{
    border-left: 3px solid black;
    transition: border-left 0.75s
  }
  position: relative;
}
li:hover button {
  color: black;
  transition: color 0.75s;
}
a {
  text-decoration: none;
  color: black;
}

nav {
  border-right: 1px solid #E8E8E8;
  padding-top: 1rem;
  padding-right: 2rem;
  width: 24%;
  min-width: 300px;
  height: 100vh;
}
span{
  font-weight: bold;
}
button{
  position: absolute;
  left: 3px;
  width: 50px;
  display: flex;
  color: white;
  border: none;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
}

@keyframes spinRight {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
`;

export default GlobalStyle;
