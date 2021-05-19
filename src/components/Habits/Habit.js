import styled from 'styled-components'
import {BsTrash} from "react-icons/bs";

export default function Habit(){
    return(
        <HabitStyle>
            <p>Hábito 1</p>
            <div className="weekdays">
                <div>D</div>
                <div>S</div>
                <div>T</div>
                <div>Q</div>
                <div>Q</div>
                <div>S</div>
                <div>S</div>
            </div>
            <div className="trashcan" onClick={()=>(console.log("exclua hábito!"))}>
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
    }

    .trashcan{
        position:absolute;
        right:10px;
        top:10px;
    }
`