import styled from "styled-components"

export const SuggestionsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
`
export const BoxSuggestions = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
border-radius: 30px;
background: ${({theme}) => theme.box};
width:80%;
box-shadow: 1px 5px 5px black;
margin-bottom: 20px;
`
export const BoxCardsSuggestions = styled.div`
display:flex;
justify-content: center;
flex-direction:row;
width:100%;
flex-wrap: wrap;
`
export const TextSuggestions = styled.h1`
color: ${({theme}) => theme.text};
@media (max-width: 545px){
    margin:10px;
}
`