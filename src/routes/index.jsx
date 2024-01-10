import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../views/home/home.jsx";
import Login from "../views/login/login.jsx";
import DrinkDetail from "../views/drinkDetail/index.jsx";

import { PrivateRoutes } from "./privateRoutes";
import { useSelector } from "react-redux";

import Loading from "../components/loading/loading.js";
import Favorites from "../views/favorites/index.jsx";
import { ThemeProvider } from "styled-components";
import { darkThemeStyle, lightThemeStyle } from "../theme/Themes.js";
import GlobalStyle from "../utils/globalStyle/global.js";

function AllRoutes(){
    const { darkTheme } = useSelector(state => state.theme);
    const { loading } = useSelector(state => state.loading)
    return(
            <ThemeProvider theme={darkTheme ? darkThemeStyle : lightThemeStyle }>
                    <GlobalStyle />
            {loading &&
                    <Loading />
            }
            <BrowserRouter>

                    <Routes>
                        <Route path="/" element={
                            <PrivateRoutes>
                                <Home />
                            </PrivateRoutes>}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/detail/:id" element ={
                        <PrivateRoutes>
                            <DrinkDetail />
                        </PrivateRoutes>}/>
                        <Route path="/favorites" element ={
                            <PrivateRoutes>
                            <Favorites />
                        </PrivateRoutes>}/>
                        
                    </Routes>
            </BrowserRouter>
            </ThemeProvider>
    )
}
export default AllRoutes;