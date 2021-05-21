import React,{useContext} from 'react'
import styled from 'styled-components'
import UserContext from '../../contexts/UserContext'
import {BsTrash} from "react-icons/bs"
import axios from 'axios'


export default function Habit({habit, setHabits}){

    const {user} = useContext(UserContext);

    function findDay(day){
        let flag=false;
        habit.days.forEach(d=>{
            if(d===day){
                flag=true;
            }
        })
        return flag;
    }

    function deleteHabit(id){
        let flag = window.confirm("\nSeu hábito será excluído e todo progresso será perdido. \n\n Tem certeza que quer continuar?");
        if(!flag)return;
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const promisse = axios.delete("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/"+id,config);
        promisse.then((answer)=>{
            const consecutivePromisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',config);
            consecutivePromisse.then(answer=>{
            setHabits(answer.data);
            });
            consecutivePromisse.catch(answer=>console.log(answer.response));
        });
        promisse.catch(answer=>console.log(answer.response));
    }

    return(
        <HabitStyle>
            <p>{habit.name}</p>
            <div className="weekdays">
                <div className={findDay(1)?"selected":""} >D</div>
                <div className={findDay(2)?"selected":""} >S</div>
                <div className={findDay(3)?"selected":""} >T</div>
                <div className={findDay(4)?"selected":""} >Q</div>
                <div className={findDay(5)?"selected":""} >Q</div>
                <div className={findDay(6)?"selected":""} >S</div>
                <div className={findDay(7)?"selected":""} >S</div>
            </div>
            <div className="trashcan" onClick={()=>deleteHabit(habit.id)}>
                <BsTrash style={{ width:20, height:20,color: '#666'}}/>
            </div>
        </HabitStyle>
    )
}

const HabitStyle=styled.div`

    height:91px;
    background:#fff;
    border-radius:5px;
    margin-bottom:29px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.025);
    position:relative;

    p{
        font-size: 20px;
        color: #666;
        padding: 13px 0px 10px 15px;
    }

    .weekdays{
        margin-left:14px;
        display:flex;

        div{
            margin-right:4px;
            width:30px;
            height:30px;
            font-size:20px;
            color:#dbdbdb;
            border-radius:5px;
            border:1px solid #dbdbdb;
            background:#fff;
            display:flex;
            justify-content:center;
            align-items:center;
        }

        .selected{
            color:#fff;
            background:#dbdbdb;
        }
    }

    .trashcan{
        position:absolute;
        right:10px;
        top:10px;
    }
`