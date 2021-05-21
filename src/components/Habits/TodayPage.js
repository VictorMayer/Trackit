import React, {useContext} from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import TodayContext from '../../contexts/TodayContext'
import PercentageContext from '../../contexts/PercentageContext'

import Navbar from './Navbar'
import TodayHabit from './TodayHabit'
import Footer from './Footer'

export default function TodayPage(){

    require('dayjs/locale/pt-br');    
    const {todayHabits} = useContext(TodayContext);
    const {percentage} = useContext(PercentageContext);
    
    return(
        <>
        <Navbar/>
        <TodayStyles percentage={percentage}>
            <header>
                <p>{`${dayjs().locale('pt-br').format('dddd')}, ${dayjs().locale('pt-br').format('DD/MM')}`}</p>
                <p>{percentage === 0 ? "Nenhum hábito concluído ainda" : `${percentage.toFixed(0)}% dos hábitos concluídos`}</p>
            </header>
            
            {todayHabits.map((todayHabit, i)=>(
                <TodayHabit key={i} todayHabit={todayHabit}/>
            ))}

        </TodayStyles>
        <Footer/>
        </>
    )
}

const TodayStyles=styled.div`

    width:100vw;
    min-height:calc(100vh - 140px);
    margin: 70px 0px;
    padding:28px 18px 35px 18px;
    background:#F2F2F2;
    font-family: 'Lexend Deca', sans-serif;

    header{
        color:#126BA5;
        font-size:23px;
        margin-bottom:30px;

        p:last-child{
            font-size:18px;
            color:${props => props.percentage === 0 ? "#bababa" : "#8FC549" };
            margin-top:7px;
        }
    }

`