import React, { useContext } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import UserContext from '../../contexts/UserContext'
import TodayContext from '../../contexts/TodayContext'
import PercentageContext from '../../contexts/PercentageContext'
import {HiCheck} from 'react-icons/hi'

export default function TodayHabit({todayHabit}){

    const {user} = useContext(UserContext);
    const {setTodayHabits} = useContext(TodayContext);
    const {setPercentage} = useContext(PercentageContext);
    const config = {headers: {"Authorization": `Bearer ${user.token}`}}
    
    function toggleHabit(){
        
        let toggle = todayHabit.done ? "uncheck" : "check";
        
        const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${todayHabit.id}/${toggle}`,{},config);
        promisse.then(()=>{
            const consecutivePromisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config);
            consecutivePromisse.then((answer)=>{
                console.log(answer.data);
                calculate(answer.data);
                setTodayHabits(answer.data);
            });
            consecutivePromisse.catch((answer)=>console.log(answer.response));
        });
        promisse.catch((answer)=>console.log(answer.response));

    }
    
    function calculate(array){
        const newArray = array.filter((a)=>a.done);
        console.log(newArray);
        setPercentage(newArray.length*100/array.length)
    }



    return(
        <TodayHabitStyles done={todayHabit.done} current={todayHabit.currentSequence} highest={todayHabit.highestSequence}>
            <p className="habit-header">{todayHabit.name}</p>
            <p>Sequência atual: <span className="current">{todayHabit.currentSequence+" dias"}</span></p>
            <p>Seu recorde: <span className="highest">{todayHabit.highestSequence+" dias"}</span></p>
            <div className="icon-container" onClick={toggleHabit} >
                <HiCheck style={{ width:55, height:55,color: '#fff' }} />
            </div>
        </TodayHabitStyles>
    )
}

const TodayHabitStyles=styled.div`

    background:#fff;
    min-height:94px;
    border-radius:5px;
    margin-bottom:10px;
    padding-right:95px;
    padding: 15px 95px 12px 14px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.025);
    position:relative;
    
    .habit-header{
        font-size: 20px;
        color: #666;
        margin-bottom:16px;
        word-break:break-word;
    }

    p{
        font-size:13px;
        color:#666;

        .current{
            color:${ props => props.done ? "#8FC549" : "#EBEBEB" }
        }
        .highest{
            color:${ props => props.done && props.current >= props.highest ? "#8FC549" : "#EBEBEB" }
        }
    }

    .icon-container{
        position:absolute;
        right:13px;
        top:13px;
        width:69px;
        height:69px;
        background:${ props => props.done ? "#8FC549" : "#EBEBEB" };
        border-radius:5px;
        border:1px solid #e7e7e7;
        display:flex;
        justify-content:center;
        align-items:center;
    }

`