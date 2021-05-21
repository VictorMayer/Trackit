import React, {useContext} from 'react'
import styled from 'styled-components'
import UserContext from '../../contexts/UserContext'
import TodayContext from '../../contexts/TodayContext'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'

export default function Login({logo}){

    const history = useHistory();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loader, setLoader] = React.useState(false);
    const {setUser} = useContext(UserContext);
    const {setTodayHabits} = useContext(TodayContext);

    function logIn(event){
        event.preventDefault();
        const body = {
            email:email,
            password:password
        }
        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login',body);
        promisse.then(answer=>loginSucessful(answer.data));
        promisse.catch(answer=>loginFailed(answer.response));
        console.log(body);
        setLoader(true);
    }

    function loginSucessful(data){
        setLoader(false)
        console.log(data)
        setUser(data);
        const config = {
            headers: {
                "Authorization": `Bearer ${data.token}`
            }
        }
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config)
        promisse.then(answer=>{
            console.log(answer.data);
            setTodayHabits(answer.data);
            history.push("/today");
        })
        promisse.catch(answer=>console.log(answer.response));
    }
    
    function loginFailed(response){
        setLoader(false)
        console.log(response);
        if(response.status===401){
            alert("Erro: "+response.data.message)
        }
        if(response.status===422){
            alert("Error:  "+response.data.details)
        }
    }

    return(
        <>
        <LoginPage>
            <img src={logo} alt="logo"/>
            <form onSubmit={logIn} >
                <input placeholder="email" disabled={loader} type="text" required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input placeholder="senha" disabled={loader} type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button type="submit" >{loader? <Loader type="ThreeDots" color="#fff" height={15} width={50}/> : "Entrar"}</button>
            </form>
            <button onClick={()=>history.push("/signup")} className="sign-up">Não tem uma conta? Cadastre-se!</button>
        </LoginPage>
        </>
    )
}

const LoginPage = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:68px 36px 0px 36px; 

    input{
        border: 1px solid #D4D4D4;
        border-radius:5px;
        height:45px;
        width:100%;
        padding: 12px;
        font-size: 20px;
        color: #666;
        outline-style:none;
        margin-bottom: 6px;

        &::placeholder {
        color: #DBDBDB;
        }
    }
    
    button{
        border: 1px solid #D4D4D4;
        border-radius:5px;
        height:45px;
        width:100%;
        font-size: 20px;
        background: #52B6FF;
        color:#fff;
        cursor:pointer;
        outline-style:none;
        margin-bottom:23px;
    
    }
    
    .sign-up{
        background:#fff;
        color:#52B6FF;
        font-size:14px;
        text-decoration:underline;
        border-style:none;
    }
    

`