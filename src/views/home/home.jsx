import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import * as listDrinksController from "../../controllers/listDrinksController"

import CardDrink from "../../components/Cards/cardDrink";
import { BoxCards, FilterContainer, BoxFilters, InputFilter, AlignText, ButtonFilter, LineDivider, ContainerCards, TotalValue, BoxTotal, FavoriteButton, BoxLogo, SwitchContainer } from "./style";
import ReactSelect from "react-select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/logo";
import { MdFavorite } from "react-icons/md";

import { Switch } from '@mui/material';
import * as DarkThemeActions from '../../store/modules/theme/actions'
import { createTheme, alpha, getContrastRatio, ThemeProvider } from '@mui/material/styles';

const Home = () =>{
    const [select, setSelect] = useState('')
    const [filter, setFilter] = useState('')
    const { drinks } = useSelector(state => state.drinksList);
    const navigate = useNavigate();
    const { darkTheme } = useSelector(state => state.theme);

    const purpleBase = '#3F51B5';
const purpleMain = alpha(purpleBase, 0.7);

const theme = createTheme({
  palette: {
    purple: {
      main: purpleMain,
      light: alpha(purpleBase, 0.5),
      dark: alpha(purpleBase, 0.9),
      contrastText: getContrastRatio(purpleMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});

    const options = [{
        label:'Nome',
        value:'name'
    },
    {
        label:'Ingrediente',
        value:'ingredient'
    }]
    useEffect(()=>{
        listDrinksController.getDrinks('');
    },[])
    return(
        <ThemeProvider theme={theme}>
        <FilterContainer>
            <BoxLogo>
                <Logo />
            </BoxLogo>
                <FavoriteButton onClick={()=> navigate('/favorites')}> <MdFavorite color={'red'}/> Favoritos</FavoriteButton>
            <SwitchContainer>
                <h2>Dark Mode</h2>
            <Switch 
            color={'purple'}
            checked={darkTheme} 
            onChange={(e) =>DarkThemeActions.SetDarkTheme(e.target.checked) }/>
            </SwitchContainer>
            <BoxFilters>
            <LineDivider>
                <AlignText>
                    <h1>Filtrar Por:</h1>
                <ReactSelect
                className="react-select info"
                classNamePrefix="react-select"
                value={select}
                options={options}
                onChange={value => setSelect(value)}
                noOptionsMessage={() => "Não encontrado"}
                styles={{
                    control: (base) => ({
                    ...base,
                    width:"200px",
                    minHeight: "35px",
                    height: "35px",
                    color: darkTheme ? "#fff" : "#000",
                    background: darkTheme ? "#0A2647" : "#fff",
                    border:darkTheme ? "none" : "1px solid hsl(0, 0%, 80%)"
                    })
                }}
                />
                </AlignText>
                <AlignText>
                    <h1>Digite:</h1>
                    <InputFilter onChange={(e) => setFilter(e.target.value) } placeholder={select.label !== undefined ? 'Digite um ' + select.label : 'Escolha um tipo de filtro'}/>
                </AlignText>
            </LineDivider>
            <ButtonFilter onClick={() => listDrinksController.SearchDrinks(filter,select)}>Buscar</ButtonFilter>
            </BoxFilters>
            <BoxCards>
                <BoxTotal>
                    <TotalValue>Total: {drinks?.length ? drinks.length : 0}</TotalValue>
                </BoxTotal>
            <ContainerCards>
                {
                    drinks?.map(e =>{
                        return(
                        <CardDrink drink={e} key={e.idDrink}/>
                    )})
                }
            </ContainerCards>
            </BoxCards>
        </FilterContainer>
        </ThemeProvider>
    )
}
export default Home;