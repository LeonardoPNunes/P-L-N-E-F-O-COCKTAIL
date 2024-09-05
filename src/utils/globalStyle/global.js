import styled, { createGlobalStyle } from "styled-components";

export const Button = styled.button`
color:white;
text-transform: uppercase;
background:#0A2647;
width:20vh;
height:40px;
border-radius: 20px;
border:none;
cursor: pointer;
margin:20px;

&:hover{
transition: 0.5s;
border:2px solid rgba(255,255,255, 0.3)
}
`
export const Input = styled.input`
width:100%;
height:30px;
padding:0 5px;
border:none;
border-radius:5px;
`

export const AlignlR = styled.div`
margin: 0 auto;
width:25vw;

@media (max-width: 750px){
  width:100%;
}

`
export const BackButton = styled.button`
width:200px;
height:40px;
background:${({theme}) => theme.button};
text-transform: uppercase;
font-weight: bold;
cursor: pointer;
color:white;
border-radius: 20px;
box-shadow: 1px 2px 2px black;
`
export const BoxFavorite = styled.div`
display: flex;
width:80%;
justify-content: left;
`
export const BoxToBack = styled.div`
margin:10px;
width:80%;
`
export const TextPageName = styled.h1`
font-size: 25px;
text-transform: uppercase;
font-weight: 900;
margin:20px;
color:${({theme}) => theme.text}
`
export const DividerX = styled.div`
width:100%;
height:2px;
background:black;
`
const GlobalStyle = createGlobalStyle`

html,body{
    background: ${({ theme }) => theme.body};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`
export default GlobalStyle