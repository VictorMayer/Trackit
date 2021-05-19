import styled from 'styled-components'
import Navbar from './Navbar'
import Footer from './Footer'

export default function History(){
    return(
    <>
        <Navbar/>
        <HistoryStyles>
            <p>Histórico</p>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </HistoryStyles>
        <Footer/>
    </>
    )
}

const HistoryStyles=styled.div`

    width:100vw;
    height:calc(100vh - 140px);
    margin: 70px 0px;
    padding:28px 18px 0px 18px;
    background:#F2F2F2;
    font-family: 'Lexend Deca', sans-serif;
    
    p{
        color:#126BA5;
        font-size:23px;
        margin-bottom:20px;

        &:last-child{
            font-size:18px;
            color:#666;
            margin-bottom:30px;
        }
    }

`