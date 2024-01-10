import styled from "styled-components";

export const ContainerDetail = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const BoxDetail = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 30px;
background: ${({theme}) => theme.box};
width:80%;
box-shadow: 1px 5px 5px black;
margin-bottom: 20px;
color:${({theme}) => theme.text}
`
export const DrinkImage = styled.img`
margin-top:30px;
width:400px;
height:300px;
border-radius: 10px;
border:2px solid ${({theme}) => theme.shadow};
@media (max-width: 545px){
    width:250px
}
@media (max-width: 345px){
    width:200px
}
`
export const DrinkName = styled.h1`
font-size: 25px;
font-weight: bold;

`
export const DrinkInfo = styled.h1`
font-size: 20px;
font-weight: bold;
`
export const DrinkValue = styled.h1`
margin-left:10px;
font-size: 15px;
font-weight: bold;
`
export const BoxIngredient = styled.div`
border:1px solid ${({theme}) => theme.shadow};
border-radius: 20px;
width:40vw;
margin:20px 0;
padding:20px;
`
export const BoxType = styled.div`
display:flex;
justify-content: center;
align-items: center;
background:red
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
export const IngredientsValue= styled.div`
display:flex;
flex-direction:column`