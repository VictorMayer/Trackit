import styled from 'styled-components'

import Navbar from './Navbar'
import TodayHabit from './TodayHabit'
import Footer from './Footer'

export default function TodayPage(){
    return(
        <>
        <Navbar/>
        <TodayStyles>
            <header>
                <p>Segunda, 17/05</p>
                <p>Nenhum hábito concluído ainda</p>
            </header>

            <TodayHabit/>
            <TodayHabit/>
            
        </TodayStyles>
        <Footer/>
        </>
    )
}

const TodayStyles=styled.div`

    width:100vw;
    height:calc(100vh - 140px);
    margin: 70px 0px;
    padding:28px 18px 0px 18px;
    background:#F2F2F2;
    font-family: 'Lexend Deca', sans-serif;

    header{
        color:#126BA5;
        font-size:23px;
        margin-bottom:30px;

        p:last-child{
            font-size:18px;
            color:#bababa;
            margin-top:7px;
        }
    }

`