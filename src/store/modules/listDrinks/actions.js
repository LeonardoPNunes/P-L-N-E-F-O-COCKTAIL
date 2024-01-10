import { STORE_ID, TYPES } from './types'
import store from '../../index'

function dispatch(data) {
    data = { ...data, storeId: STORE_ID }
    store.dispatch(data)
}
export function setDrinks(value) {
    dispatch({
        type: TYPES.SET_DRINKS,
        value
    })
}
export function setDetail(value) {
dispatch({
    type: TYPES.SET_DETAIL,
    value
})
}
export function setRandom(value) {
dispatch({
    type:TYPES.SET_RANDOM,
    value
})
}