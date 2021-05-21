import React,{useContext} from 'react';
import UserContext from '../../contexts/UserContext';
import TodayContext from '../../contexts/TodayContext';
import HabitsContext from '../../contexts/HabitsContext';
import PercentageContext from '../../contexts/PercentageContext'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Footer(){

    const history = useHistory();
    const {user} = useContext(UserContext);
    const {setTodayHabits} = useContext(TodayContext);
    const {setHabits} = useContext(HabitsContext);
    const {percentage} = useContext(PercentageContext)

    function goToTodayPage(){
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",config)
        promisse.then(answer=>{
            setTodayHabits(answer.data);
            history.push("/today");
        })
    }

    function goToHabitsPage(){
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config)
        promisse.then(answer=>{
            setHabits(answer.data);
            history.push("/habits");
        })
    }


    return(
        <FooterStyles>
            <button onClick={goToHabitsPage} >Hábitos</button>
            <div className="progressbar-container">
                <div className="progressbar"  onClick={goToTodayPage}>
                    <CircularProgressbar value={percentage} styles={buildStyles({
                        backgroundColor: '#52B6FF',
                        trailColor:"#52B6FF",
                        textColor:"#fff",
                        pathColor:'#fff'
                    })} 
                    background backgroundPadding={5} text="Hoje"></CircularProgressbar>
                </div>
            </div>
            <button onClick={()=>(history.push("/history"))} >Histórico</button>
        </FooterStyles>
    )  
}

const FooterStyles=styled.div`

    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#fff;
    box-shadow: 0px -1px 4px 2px rgba(0,0,0,0.025);

    .progressbar{
        position:absolute;
        left:calc(50% - 50px);
        bottom:10px;
        width:91px;
        height:91px;
        background:#52B6FF;
        color:#fff;
        border-radius:50%;
    }

    button{
        height:100%;
        font-size:18px;
        color:#52B6FF;
        background:#fff;
        border:none;
        padding:0px 30px;
    }

`