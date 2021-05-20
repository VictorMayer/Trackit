import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

export default function Login({logo}){

    const history = useHistory();

    return(
        <>
        <LoginPage>
            <img src={logo} alt="logo"/>
            <input placeholder="email"></input>
            <input placeholder="senha"></input>
            <button>Entrar</button>
            <button onClick={()=>history.push("/signup")} class="sign-up">Não tem uma conta? Cadastre-se!</button>
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