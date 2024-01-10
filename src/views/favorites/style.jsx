import styled from "styled-components"

export const FavoriteContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width:100%;
`
export const ContainerListFavorites = styled.div`
display: flex;
flex-direction: column;
background:${({theme}) => theme.box};
width:80%;
margin:15px 0;
border-radius: 30px;
box-shadow: 1px 5px 5px black;
`
export const BoxListFavorites = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`
export const DrinkImage = styled.img`
width:200px;
height:286px;
padding-bottom:30px;
`
export const ContainerEmptyDrink = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`