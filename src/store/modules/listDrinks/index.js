import { STORE_ID, TYPES } from "./types"

const INITIAL_STATE = {
    drinks: [],
    detail: [],
    random: [],
}

export default function drinksList(state = INITIAL_STATE, action) {
    switch (action.storeId) {
        case STORE_ID:
            switch (action.type) {
                case TYPES.SET_DRINKS:
                    return { ...state, drinks: action.value }
                case TYPES.SET_DETAIL:
                    return { ...state, detail: action.value}
                case TYPES.SET_RANDOM:
                    return { ...state, random: action.value}
                default:
                    return { ...state }
            }
        default:
            return { ...state }
    }
}