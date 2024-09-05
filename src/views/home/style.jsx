import styled from "styled-components";

export const FilterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:100%;
`
export const BoxFilters = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
background:${({ theme }) => theme.box};
width:80%;
border-radius: 30px;
box-shadow: 1px 5px 5px black;

`
export const BoxCards = styled.div`
display: flex;
flex-direction: column;
background: ${({ theme }) => theme.box};
width:80%;
margin:15px 0;
border-radius: 30px;
box-shadow: 1px 5px 5px black;

`
export const InputFilter = styled.input`
outline: 0!important;
width:180px;
height:33px;
border-radius:4px;
padding:0 10px;
color:${({ theme }) => theme.text};
border: 1px solid ${({ theme }) => theme.border};
background: ${({ theme }) => theme.input};
`
export const ButtonFilter = styled.button`
color:white;
text-transform: uppercase;
background: ${({ theme }) => theme.button};
width:100px;
height:40px;
font-size: 15px;
border-radius: 20px;
padding:10px;
border:none;
cursor: pointer;
margin: 20px 40px;
font-weight: bold;
&:hover{
    color:#61abec;

}
`
export const AlignText = styled.div`
display:flex;
flex-direction:column;
margin:20px;
h1{
    color: ${({ theme }) => theme.text};
    font-size:15px;
}
`
export const LineDivider = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`
export const ContainerCards = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;

`
export const TotalValue = styled.h1`
color: ${({ theme }) => theme.text};
font-size: 20px;
`
export const BoxTotal = styled.div`
display: flex;
width:95%;
justify-content: end;
`
export const FavoriteButton = styled.button`
width:200px;
height:40px;
background: ${({ theme }) => theme.button};
text-transform: uppercase;
font-weight: bold;
cursor: pointer;
color:white;
border-radius: 20px;
box-shadow: 1px 2px 2px black;
margin:10px;
`
export const BoxLogo = styled.div`
display:flex;
background:#00000036;
margin:10px;
border-radius: 15px;
padding:0 5px;
justify-content:end;

`

export const SwitchContainer = styled.div`
position: absolute;
right: 3vw;
top:12px;

text-align: center;
>h2{
    font-weight: 400;
    font-size: 16px;
    color: white;
}
`