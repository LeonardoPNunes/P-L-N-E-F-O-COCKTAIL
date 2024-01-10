import styled from "styled-components";

export const DrinkContainer = styled.div`
width:200px;
height:350px;
margin:50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
border:1px solid black;
border-radius: 20px;
box-shadow: 1px 5px 5px ${({ theme }) => theme.shadow};

`
export const DrinkImage = styled.img`
width:100%;
height:70%;
border-radius: 20px 20px 0px 0px;

`
export const DrinkName = styled.h1`
color: ${({ theme }) => theme.text};
text-align: center;
font-size: 15px;
height: 25px;
text-overflow:ellipsis;
white-space: nowrap;
overflow: hidden;
width:90%;
font-weight: bold;
`
export const DrinkButton = styled.button`
color:white;
text-transform: uppercase;
background: ${({ theme }) => theme.button};
min-width:100px;
height:40px;
font-size: 15px;
border-radius: 20px;
padding:10px;
border:none;
cursor: pointer;
font-weight: bold;
&:hover{
    color:#61abec;

}
`
export const AddButton = styled.button`
display: flex;
position: absolute;
margin-left:30px;
background:#00000099;
text-align: center;
color:white;
margin:10px 0;
border-radius: 50%;
padding:10px;
border:none;
cursor: pointer;
align-items: flex-end;
justify-content: end;
&:hover{
    color:#61abec;

}
`
export const BoxAddButton = styled.div`
display: flex;
justify-content: end;
width:100%;
margin-right:20px;
`