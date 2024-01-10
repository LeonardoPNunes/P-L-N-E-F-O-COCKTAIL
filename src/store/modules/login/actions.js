import { STORE_ID, TYPES } from './types'
import store from '../../index'

function dispatch(data) {
    data = { ...data, storeId: STORE_ID }
    store.dispatch(data)
}
export function login(field,value) {
    dispatch({
        type: TYPES.SET_LOGIN,
        field,
        value
    })
}