import { STORE_ID, TYPES } from "./types";

const INITIAL_STATE = {
    loading:false
}

export default function loading(state = INITIAL_STATE,action){
    switch(action.storeId){
        case STORE_ID:
            switch (action.type){
                case TYPES.SET_LOADING:
                    return { ...state, loading: action.value }
                default:
                    return { ...state }
            }
        default: 
        return { ...state }
        }
}