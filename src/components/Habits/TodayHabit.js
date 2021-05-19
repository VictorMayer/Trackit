import styled from 'styled-components'
import {HiCheck} from 'react-icons/hi'

export default function TodayHabit(){
    return(
        <TodayHabitStyles>
            <header>Ler 1 capítulo de livro</header>
            <p>Sequência atual: <span>3 dias</span></p>
            <p>Seu recorde: <span>5 dias</span></p>
            <div className="icon-container">
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
    
    header{
        font-size: 20px;
        color: #666;
        margin-bottom:16px;
        word-break:break-word;
    }

    p{
        font-size:13px;
        color:#666;
    }

    .icon-container{
        position:absolute;
        right:13px;
        top:13px;
        width:69px;
        height:69px;
        background:#EBEBEB;
        border-radius:5px;
        border:1px solid #e7e7e7;
        display:flex;
        justify-content:center;
        align-items:center;
    }

`