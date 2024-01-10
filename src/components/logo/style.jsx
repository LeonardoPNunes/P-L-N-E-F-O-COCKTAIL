import styled from "styled-components"

export const TextLogo = styled.h1`
font-size: 25px;
color:white;
text-transform: uppercase;
display: flex;
@media (max-width: 615px){
    font-size: 15px;
}
`
export const LogoName = styled.h1`
font-size: 25px;
color:white;
text-transform: uppercase;
font-weight: bold;
color:#61abec;
@media (max-width: 615px){
    font-size: 15px;
}

`
export const LogoContainer = styled.div`
display: flex;
flex-direction: row;
box-shadow: 1px 1px 1px 1px black;
padding:10px 20px;
background:#205295;
@media (max-width: 545px){
    width:120px
}


`