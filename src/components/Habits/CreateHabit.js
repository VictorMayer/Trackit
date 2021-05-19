import styled from 'styled-components'

export default function CreateHabit(){
    return(
        <CreateHabitStyles>
            <input placeholder="nome do hábito"></input>
            <div className="weekdays">
                <button>D</button>
                <button>S</button>
                <button>T</button>
                <button>Q</button>
                <button>Q</button>
                <button>S</button>
                <button>S</button>
            </div>
            <div className="menu">
                <button>Cancelar</button>
                <button>Salvar</button>
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