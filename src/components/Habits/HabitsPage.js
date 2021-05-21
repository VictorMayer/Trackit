import React, {useContext} from 'react'
import styled from 'styled-components'
import { IoIosAdd } from "react-icons/io";
import HabitsContext from '../../contexts/HabitsContext'

import Navbar from './Navbar'
import CreateHabit from './CreateHabit'        
import Habit from './Habit'
import Footer from './Footer'


export default function HabitsPage(){

    const {habits,setHabits} = useContext(HabitsContext);
    const [createHabit, setCreateHabit] = React.useState(false);
    const [days, setDays] = React.useState([false,false,false,false,false,false,false]);
    const [habitName, setHabitName] = React.useState("");
    
    return(
    <>
        <Navbar/>
        <HabitsPageStyle>
            <div className="my-habits">
                <p>Meus hábitos</p>
                <div onClick={()=>(setCreateHabit(true))} className="icon-container">
                    <IoIosAdd style={{ width:40, height:34,color: '#f2f2f2' }}/>
                </div>
            </div>
            
            {createHabit ? (<CreateHabit setCreateHabit={setCreateHabit} days={days} setDays={setDays} habitName={habitName} setHabitName={setHabitName}/>): (<></>)}

            {habits.length>0 ?
            (<>
            {habits.map((habit,i)=>(<Habit key={i} habit={habit} setHabits={setHabits}/>))} 
            </>) 
            : 
            (<>
            <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </>)}

            

        </HabitsPageStyle>
        <Footer/>
    </>
    )
}

const HabitsPageStyle=styled.div`

    width:100vw;
    min-height:calc(100vh - 140px);
    margin: 70px 0px 70px 0px;
    padding:28px 18px 35px 18px;
    background:#F2F2F2;
    font-family: 'Lexend Deca', sans-serif;

    
    .my-habits{
        display:flex;
        align-items:center;
        justify-content:space-between;
        color:#126BA5;
        font-size:23px;
        margin-bottom:30px;
    }
    .icon-container{
        width:40px;
        height:35px;
        background:#52B6FF;
        border-radius:5px;
    }
    &>p{
        font-size:18px;
        color:#666;
        margin-bottom:20px;
    }
`