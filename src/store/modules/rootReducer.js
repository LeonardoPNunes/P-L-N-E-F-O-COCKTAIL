import { combineReducers } from "redux";

import drinksList from "./listDrinks"
import login from "./login";
import loading from "./loading";
import theme from "./theme";


export default combineReducers(
        {
            drinksList,
            login,
            loading,
            theme
        });
