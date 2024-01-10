import { STORE_ID, TYPES } from "./types"

const INITIAL_STATE = {
    login: {
        name:'',
        password:'',
        validated:false,
    }
}

export default function login(state = INITIAL_STATE, action) {
    switch (action.storeId) {
        case STORE_ID:
            switch (action.type) {
                case TYPES.SET_LOGIN:
                    return { ...state, login: {...state.login, [action.field] : action.value} }
                default:
                    return { ...state }
            }
        default:
            return { ...state }
    }
}