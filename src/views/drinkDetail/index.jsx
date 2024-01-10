import React, { useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { notifySuccess } from "../../components/notification";
import Suggestions from "../../components/suggestions";

import * as listDrinksController from "../../controllers/listDrinksController"
import { BackButton, BoxFavorite, BoxToBack } from "../../utils/globalStyle/global";

import { 
    AddButton,
    BoxDetail, 
    BoxIngredient, 
    ContainerDetail,
    DrinkImage, 
    DrinkInfo, 
    DrinkName, 
    DrinkValue, 
    IngredientsValue
} from "./style";

const DrinkDetail = () =>{
    const { id } = useParams();
    const [icon,setIcon] = useState(false);
    const navigate = useNavigate();
    let { detail } = useSelector(state => state.drinksList);

    detail = detail[0]

    const savedFavorites = JSON.parse(localStorage.getItem("drinksFavorites"));
    let drinkExist = savedFavorites?.filter(e => e?.idDrink === detail?.idDrink);

    let listIngredients =[{
        strIngredient:detail?.strIngredient1,
        strMeasure:detail?.strMeasure1,
    },
    {
        strIngredient:detail?.strIngredient2,
        strMeasure:detail?.strMeasure2,
    },
    {
        strIngredient:detail?.strIngredient3,
        strMeasure:detail?.strMeasure3,
    },
    {
        strIngredient:detail?.strIngredient4,
        strMeasure:detail?.strMeasure4,
    },
    {
        strIngredient:detail?.strIngredient5,
        strMeasure:detail?.strMeasure5,
    },
    {
        strIngredient:detail?.strIngredient6,
        strMeasure:detail?.strMeasure6,
    },
    {
        strIngredient:detail?.strIngredient7,
        strMeasure:detail?.strMeasure7,
    },
    {
        strIngredient:detail?.strIngredient8,
        strMeasure:detail?.strMeasure8,
    },
    {
        strIngredient:detail?.strIngredient9,
        strMeasure:detail?.strMeasure9,
    },
    {
        strIngredient:detail?.strIngredient10,
        strMeasure:detail?.strMeasure10,
    },
    {
        strIngredient:detail?.strIngredient11,
        strMeasure:detail?.strMeasure11,
    },
    {
        strIngredient:detail?.strIngredient12,
        strMeasure:detail?.strMeasure12,
    },
    {
        strIngredient:detail?.strIngredient13,
        strMeasure:detail?.strMeasure13,
    },
    {
        strIngredient:detail?.strIngredient14,
        strMeasure:detail?.strMeasure14,
    },
    {
        strIngredient:detail?.strIngredient15,
        strMeasure:detail?.strMeasure15,
    },
    ]
    listIngredients = listIngredients.filter(i => i.strIngredient !== null)

    function removeItem (){
        const arr = JSON.parse(localStorage.getItem("drinksFavorites"));
        const formatedFavorites = arr.filter(e => e.idDrink !== detail.idDrink)
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
        const exist = arr.filter(e => e.idDrink === detail.idDrink);
        if(exist.length >= 1){
            removeItem()
        }
        else{
            arr.push({
                idDrink:detail?.idDrink,
                strDrink:detail?.strDrink,
                strDrinkThumb:detail?.strDrinkThumb
            });
            localStorage.drinksFavorites = JSON.stringify(arr);
            setIcon(true)
            notifySuccess('Drink salvo com sucesso');
        }
    }
    useEffect(()=>{
        listDrinksController.getDetails(id)
        if(drinkExist?.length >= 1){
            setIcon(true)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <ContainerDetail>
            <BoxToBack>
                <BackButton onClick={() => navigate('/')}>Voltar</BackButton>
            </BoxToBack>
                <BoxDetail>
                <BoxFavorite style={{width:'90%', justifyContent:'end'}}>
                <AddButton onClick={() => addAndRemoveFavorites()}>{icon === true ? <MdFavorite size={20} color={"red"}/> : <MdFavoriteBorder size={20}/>}</AddButton>
                </BoxFavorite>
                    <DrinkImage src={detail?.strDrinkThumb} alt="" />
                    <DrinkName>{detail?.strDrink}</DrinkName>
                    
                  
                <BoxIngredient>
                    <DrinkInfo>Tipo: </DrinkInfo>
                    <DrinkValue>{detail?.strAlcoholic}</DrinkValue>
                    <DrinkInfo>Ingredientes:</DrinkInfo>
                    <IngredientsValue>
                        {
                        listIngredients?.map(e =>{
                            return <DrinkValue>{e?.strIngredient}: {e.strMeasure}</DrinkValue>
                        })
                    }
                    </IngredientsValue>
                    <DrinkInfo>Preparo:</DrinkInfo>
                    <DrinkValue>{detail?.strInstructions}</DrinkValue>

                    </BoxIngredient>
                </BoxDetail>

            <Suggestions />
        </ContainerDetail>
    )
}
export default DrinkDetail;