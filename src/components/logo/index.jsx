import { LogoContainer, LogoName, TextLogo } from "./style"

export const Logo =(container) =>{
 return (
    <>{
    container.container === true ?
    <LogoContainer>
        <TextLogo>p</TextLogo>
        <LogoName>L</LogoName>
        <TextLogo>n</TextLogo>
        <LogoName>e</LogoName>
        <TextLogo>f</TextLogo>
        <LogoName>o</LogoName>
        <TextLogo>cocktail</TextLogo>
    </LogoContainer>
    :
    <>
        <TextLogo>p</TextLogo>
        <LogoName>L</LogoName>
        <TextLogo>n</TextLogo>
        <LogoName>e</LogoName>
        <TextLogo>f</TextLogo>
        <LogoName>o</LogoName>
        <TextLogo>cocktail</TextLogo>
    </>
 }
 </>
 )
}