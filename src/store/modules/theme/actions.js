import { TYPES,STORE_ID } from "./types"
import store from '../../index'

function Dispatch(data){
    data = {...data,storeId:STORE_ID}
    store.dispatch(data)
}

export function SetDarkTheme(value){
Dispatch({
    type:TYPES.DARK_THEME,
    value
})
}