import { notifyWarn } from "../components/notification"
import api from "../services/api"
import * as listDrinksActions from "../store/modules/listDrinks/actions"
import * as LoadingActions from "../store/modules/loading/actions"
export async function getDrinks(name) {
    LoadingActions.setLoading(true)
    let query = 'a=Alcoholic'
    const data = await api.get(`/filter.php?${name !== '' ? name : query}`)
    
    if (data.status !== 200) {
    LoadingActions.setLoading(false)
        return notifyWarn('Ocorreu um Erro inesperado,Tente novamente')
    }
    LoadingActions.setLoading(false)

    listDrinksActions.setDrinks(data.data.drinks)
    
}
export async function SearchDrinks(name,select) {
    LoadingActions.setLoading(true)

    if(select.value === undefined){
    LoadingActions.setLoading(false)
        return notifyWarn('Selecione um Filtro')
    }
    if(name === ''){
    LoadingActions.setLoading(false)
        return notifyWarn(`Digite um ${select.value === 'ingredient' ? 'Ingrediente' : 'Nome'}`)
    }
    const data = await api.get(`${select.value === 'ingredient' ? "/filter.php?i=" + name : "/search.php?s=" + name}`)
    if (data.status !== 200) {
        return notifyWarn('Ocorreu um Erro inesperado,Tente novamente')
    }
    LoadingActions.setLoading(false)
    listDrinksActions.setDrinks(data.data.drinks)    
}
export async function getDetails(id) {
    LoadingActions.setLoading(true)
    const data = await api.get(`/lookup.php?i=${id}`)
    if (data.status !== 200) {
    LoadingActions.setLoading(false)
        return notifyWarn('Ocorreu um Erro inesperado,Tente novamente')
    }
    LoadingActions.setLoading(false)
    
    listDrinksActions.setDetail(data.data.drinks);
    
}
export async function getRandom() {
    LoadingActions.setLoading(true)
    let arr = []
    const data1 = await api.get(`/random.php`)
    const data2 = await api.get(`/random.php`)
    const data3 = await api.get(`/random.php`)

    if (data1.status !== 200 || data2.status !== 200 || data3.status !== 200) {
    LoadingActions.setLoading(false)
        return notifyWarn('Ocorreu um Erro inesperado,Tente novamente')
    }
    arr.push(data1.data.drinks[0],data2.data.drinks[0],data3.data.drinks[0])
    LoadingActions.setLoading(false)
    listDrinksActions.setRandom(arr)
    
}