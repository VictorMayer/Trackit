import React from 'react'
import  styled from 'styled-components'

export default function SignUp({logo}){

    return(
        <>
        <SignUpPage>
            <img src={logo} alt="logo"/>
            <input placeholder="email"></input>
            <input placeholder="senha"></input>
            <input placeholder="nome"></input>
            <input placeholder="foto"></input>
            <button>Cadastrar</button>
            <button class="log-in">Já tem uma conta? Faça login!</button>
        </SignUpPage>
        </>
    )
}

const SignUpPage = styled.div`
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
    
    .log-in{
        background:#fff;
        color:#52B6FF;
        font-size:14px;
        text-decoration:underline;
        border-style:none;
    }
`