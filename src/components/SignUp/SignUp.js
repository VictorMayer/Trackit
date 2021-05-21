import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'


export default function SignUp({logo}){

    const history = useHistory();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [avatar, setAvatar] = React.useState("");
    const [loader, setLoader] = React.useState(false);

    function register(event){
        setLoader(true);
        event.preventDefault();
        const body = {
            email:email,
            name:name,
            image:avatar,
            password:password
        }
        const promisse = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',body);
        promisse.then(registerSuccesful);
        promisse.catch(answer=>registerFailed(answer.response));
    }

    function registerSuccesful(){
        setLoader(false);
        alert("Registro Concluído");
        history.push("/");
    }

    function registerFailed(response){
        setLoader(false);
        console.log(response)
        if(response.status===409){
            alert("Erro: "+response.data.message)
            return;
        }
        if(response.status===422){
            response.data.details.forEach(error=>{
                alert("Error:  "+error);
            })
            return;
        }
        alert("Ops, algum erro ocorreu...")
    }

    return(
        <>
        <SignUpPage>
            <img src={logo} alt="logo"/>
            <form onSubmit={register}>
                <input disabled={loader} required placeholder="email" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input disabled={loader} required placeholder="senha" type="text" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <input disabled={loader} required placeholder="nome" type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <input disabled={loader} required placeholder="foto" type="text" value={avatar} onChange={(e)=>setAvatar(e.target.value)}></input>
                <button>{loader ? <Loader type="ThreeDots" color="#fff" height={15} width={50}/> : "Cadastrar"}</button>
            </form>
            <button onClick={()=>(history.push("/"))} className="log-in">Já tem uma conta? Faça login!</button>
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