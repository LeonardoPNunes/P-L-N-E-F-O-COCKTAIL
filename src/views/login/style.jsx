import styled from "styled-components";

export const LoginContainer = styled.div`
width:30vw;
height: 60vh;

background:#205295;
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
padding: 40px;
border-radius: 7px;
-webkit-box-shadow: 1px 1px 28px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 1px 28px -6px rgba(0,0,0,0.75);
box-shadow: 1px 1px 28px -6px rgba(0,0,0,0.75);

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
@media (max-width: 750px){
    width:60%;
}
`
export const Acess = styled.div`
position: fixed;
top:10vh;
right:3vh;
background:#0A2647;
height: 20vh;
padding:5px;
border-radius: 5px;
border:1px solid white;
z-index:100;
>h1{
color:white;
font-size: 15px;
}
`