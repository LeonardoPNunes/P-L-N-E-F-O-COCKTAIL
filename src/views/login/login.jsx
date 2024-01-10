import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
// import { notifyWarn } from "../../components/notification"
import * as loginActions from "../../store/modules/login/actions"
import { AlignlR, Button, Input } from "../../utils/globalStyle/global"
import { 
LoginContainer } from "./style.jsx"
import * as LoadingActions from '../../store/modules/loading/actions'

import { notifyWarn } from "../../components/notification"
import { Logo } from "../../components/logo"


const Login = () => {
    const navigate = useNavigate();
    const { login } = useSelector(state => state.login);
    const savedName = localStorage.getItem('name')
    const savedPassword =localStorage.getItem('password')

    function validateLogin(){
        LoadingActions.setLoading(true)
        if(login.name !== 'admin@gmail.com'){
            LoadingActions.setLoading(false)
            return notifyWarn('Digite um Email valido!') 
        }
        else if(login.password !== '123'){
            LoadingActions.setLoading(false)
             return notifyWarn('Digite uma Senha valida!') 
        }
        onChange('validated', true);

        localStorage.setItem('name',login.name.toLowerCase());
        localStorage.setItem('password',login.password);
        localStorage.setItem('validated', true);
        LoadingActions.setLoading(false)

        navigate('/')

    }
    function onChange(field,value){
        loginActions.login(field,value)
    }
    useEffect(()=>{
        if(savedName !== null && savedPassword !== null){
            onChange('name',savedName);
            onChange('password',savedPassword);
            onChange('validated', true);
            validateLogin() 


            
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
return(
    <LoginContainer>
        <Logo container={true}/>
        <AlignlR>
            <p style={{color:'white'}}>Email:</p>
            <Input 
            value={login.name}
            onChange={(e)=> onChange('name',e.target.value)} 
            type="email" />
        </AlignlR>

        <AlignlR>
            <p style={{color:'white'}}>Senha:</p>
            <Input 
            value={login.password}
            onChange={(e)=> onChange('password',e.target.value)} 
            type='password' />
        </AlignlR>

        <Button onClick={() => validateLogin()}>Entrar</Button>
    </LoginContainer>
)
}
export default Login