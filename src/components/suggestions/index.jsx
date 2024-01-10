import React, { useEffect } from "react"
import { BoxCardsSuggestions, BoxSuggestions, SuggestionsContainer, TextSuggestions } from "./style"
import * as listDrinksController from "../../controllers/listDrinksController"
import { useSelector } from "react-redux"
import CardDrink from "../Cards/cardDrink"

export default function Suggestions(){
    const { random } = useSelector(state => state.drinksList)
    
    useEffect(()=>{
        if(random.length === 0){
            listDrinksController.getRandom()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <SuggestionsContainer>
            <BoxSuggestions>
                <TextSuggestions>Sugestões Para Você</TextSuggestions>
                <BoxCardsSuggestions>
                    
                {
                    random?.map(e =>{
                        return(
                            <CardDrink drink={e} key={e.idDrink}/>
                            )
                        })
                    }
                </BoxCardsSuggestions>
            </BoxSuggestions>
        </SuggestionsContainer>
    )
}