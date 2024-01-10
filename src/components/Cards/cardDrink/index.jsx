import React, { useEffect, useState } from "react";
import { 
    AddButton,
    BoxAddButton,
DrinkButton,
DrinkContainer,
DrinkImage, 
DrinkName } from "./style";
import { useNavigate } from "react-router-dom";

import * as listDrinksController from "../../../controllers/listDrinksController"
import { notifySuccess } from "../../notification";

import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

export default function CardDrink(drink){
    const [icon,setIcon] = useState(false);
    const navigate = useNavigate();

    drink = drink.drink !== undefined ? drink.drink : drink.drinks;

    const savedFavorites = JSON.parse(localStorage.getItem("drinksFavorites"));
    let drinkExist = savedFavorites?.filter(e => e?.idDrink === drink?.idDrink);
    
    
    function removeItem (){
        const arr = JSON.parse(localStorage.getItem("drinksFavorites"));
        const formatedFavorites = arr.filter(e => e.idDrink !== drink.idDrink)
        localStorage.drinksFavorites = JSON.stringify(formatedFavorites)
        setIcon(false)
        notifySuccess('Drink removido com sucesso');
    }

    function addAndRemoveFavorites(){
        let arr = [];
        if(localStorage.drinksFavorites){
        arr = JSON.parse(localStorage.getItem('drinksFavorites'));
        }

        // eslint-disable-next-line array-callback-return
        const exist = arr.filter(e => e.idDrink === drink.idDrink);
        if(exist.length >= 1){
            removeItem()
            
        }
        else{
            arr.push(drink);
            localStorage.drinksFavorites = JSON.stringify(arr);
            setIcon(true)
            notifySuccess('Drink salvo com sucesso');
        }
    }
    async function details(){
        await listDrinksController.getDetails(drink.idDrink)
        await listDrinksController.getRandom()
        navigate(`/detail/${drink?.idDrink}`)
        window.scroll(0, 0)
    }
    useEffect(()=>{
        if(drinkExist?.length >= 1){
            setIcon(true)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <DrinkContainer>
            <BoxAddButton>
                <AddButton onClick={() => addAndRemoveFavorites()}>{icon === true ? <MdFavorite size={20} color={"red"}/> : <MdFavoriteBorder size={20}/>}</AddButton>
            </BoxAddButton>
            <DrinkImage src={drink?.strDrinkThumb} alt='image drink'/>
            <DrinkName>{drink?.strDrink}</DrinkName>
            <DrinkButton onClick={() => details()}>Ver Mais</DrinkButton>
        </DrinkContainer>
    )
}