import React from "react";
import { useNavigate } from "react-router-dom";
import CardDrink from "../../components/Cards/cardDrink";
import { BackButton, BoxToBack, DividerX, TextPageName } from "../../utils/globalStyle/global";
import { BoxListFavorites, ContainerListFavorites, FavoriteContainer,DrinkImage, ContainerEmptyDrink } from "./style";
import EmptyDrink from '../../assets/cocktail-vazio.png'
import Suggestions from "../../components/suggestions";
const Favorites = () =>{
    const navigate = useNavigate();
    const savedFavorites = JSON.parse(localStorage.getItem("drinksFavorites"));
    console.log(savedFavorites + "oiiiiiiiiiiiiiiiiii")
    return(
        <FavoriteContainer>
            <BoxToBack>
                <BackButton onClick={() => navigate('/')}>Voltar</BackButton>
            </BoxToBack>
            <ContainerListFavorites>
            
            <TextPageName>favoritos</TextPageName>
            <DividerX />
            <BoxListFavorites>
        {
savedFavorites?.length <= 0 || savedFavorites === null ?
            (
            <ContainerEmptyDrink>
                <TextPageName>Não Há nada aqui!</TextPageName>
                <DrinkImage src={EmptyDrink} alt="" />
            </ContainerEmptyDrink>
            )
            
:
            savedFavorites?.map(e =>{
                return(
                    <CardDrink drinks={e} key={e.idDrink}/>
                    )
                })
            }
            </BoxListFavorites>
            </ContainerListFavorites>
            <Suggestions />
        
        </FavoriteContainer>
    )
}

export default Favorites