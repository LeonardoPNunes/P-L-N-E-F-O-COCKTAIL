import { STORE_ID, TYPES } from "./types"

const INITIAL_STATE = {
    darkTheme:false
} 
export default function theme (state = INITIAL_STATE,action){
    console.log(action.value)
    switch(action.storeId){
        case STORE_ID:
            switch(action.type){
                case TYPES.DARK_THEME:
                    return {...state, darkTheme: action.value}
                default:
                    return{...state}
            }
        
        default:
            return {...state}
    }
}