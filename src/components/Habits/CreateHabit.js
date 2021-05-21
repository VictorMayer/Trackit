import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React, {useContext} from 'react'
import UserContext from '../../contexts/UserContext'
import HabitsContext from '../../contexts/HabitsContext'
import TodayContext from '../../contexts/TodayContext'
import PercentageContext from '../../contexts/PercentageContext'
import styled from 'styled-components'
import axios from 'axios'
import Loader from 'react-loader-spinner'

export default function CreateHabit({setCreateHabit, days, setDays, habitName, setHabitName}){

    const {user} = useContext(UserContext);
    const {habits,setHabits} = useContext(HabitsContext);
    const {setTodayHabits} = useContext(TodayContext);
    const {setPercentage} = useContext(PercentageContext);
    const [loader, setLoader] = React.useState(false);

    function saveHabit(){
        setLoader(true);
        const daysArray=[];
        days.forEach((d,i)=>{
            if(d){
                daysArray.push(i);
            }
        })
        if(daysArray.length === 0){
            setLoader(false);
            alert("Selecione o(s) dia(s) em que se deve realizar seu novo hábito");
            return;
        }
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}`
            }
        }
        const body = {
            name: habitName,
            days: daysArray
        }
        const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",body,config);
        promisse.then((answer)=>{
            setLoader(false);
            setHabits([...habits,answer.data]);
            setDays([]);
            setHabitName("");
            setCreateHabit(false);
            const consecutivePromisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today',config);
            consecutivePromisse.then((answer)=>{
                calculate(answer.data);
                setTodayHabits(answer.data);
            });
        });
        promisse.catch((answer)=>{
            console.log(answer.response)
            alert("Error:  "+answer.response.data.details)
            setLoader(false);
        });
    }

    function calculate(array){
        const newArray = array.filter((a)=>a.done);
        setPercentage(newArray.length*100/array.length)
    }

    return(
        <CreateHabitStyles>
            <input disabled={loader} placeholder="nome do hábito" value={habitName} onChange={(e)=>setHabitName(e.target.value)} ></input>
            <div className="weekdays">
                <button disabled={loader} onClick={()=>{days[0]=!days[0];setDays([...days])}} className={days[0]?"selected":""}>D</button>
                <button disabled={loader} onClick={()=>{days[1]=!days[1];setDays([...days])}} className={days[1]?"selected":""}>S</button>
                <button disabled={loader} onClick={()=>{days[2]=!days[2];setDays([...days])}} className={days[2]?"selected":""}>T</button>
                <button disabled={loader} onClick={()=>{days[3]=!days[3];setDays([...days])}} className={days[3]?"selected":""}>Q</button>
                <button disabled={loader} onClick={()=>{days[4]=!days[4];setDays([...days])}} className={days[4]?"selected":""}>Q</button>
                <button disabled={loader} onClick={()=>{days[5]=!days[5];setDays([...days])}} className={days[5]?"selected":""}>S</button>
                <button disabled={loader} onClick={()=>{days[6]=!days[6];setDays([...days])}} className={days[6]?"selected":""}>S</button>
            </div>
            <div className="menu">
                <button onClick={()=>setCreateHabit(false)} >Cancelar</button>
                <button onClick={saveHabit} >{loader ? <Loader type="ThreeDots" color="#fff" height={15} width={50}/> : "Salvar"}</button>
            </div>
        </CreateHabitStyles>
    )
}

const CreateHabitStyles = styled.div`

    height:180px;
    background:#fff;
    border-radius:5px;
    margin-bottom:29px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.05);
    
    input{
        border: 1px solid #D5D5D5;
        border-radius:5px;
        height:45px;
        width:303px;
        font-size: 20px;
        color: #666;
        outline-style:none;
        padding: 12px;
        margin: 18px 18px 10px 18px;

        &::placeholder {
        color: #DBDBDB;
        }
    }

    .weekdays{
        margin: 0px 18px;
        
        button{
            background:#fff;
            width:30px;
            height:30px;
            font-size:20px;
            border-radius:5px;
            border:1px solid #dbdbdb;
            margin-right:4px;
            color:#dbdbdb;

        }
        .selected{
            color:#fff;
            background:#dbdbdb;
        }
    }

    .menu{
        margin-top:29px;
        display:flex;
        justify-content:flex-end;
        
        button{    
            width:84px;
            height:35px;
            margin-right:14px;
            border-radius:5px;
            border-style:none;
            cursor: pointer;
            font-size:16px;
        }
        button:first-child{
            background:#fff;
            color:#52B6FF;
            width:80px;
        }
        button:last-child{
            background:#52B6FF;
            color:#fff;
            margin-right:16px;
        }
    }

`