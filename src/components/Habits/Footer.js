import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import styled from 'styled-components'

export default function Footer(){

    //functions
    const [percentage,setPercentage] = React.useState(0);

    return(
        <FooterStyles>
            <button>Hábitos</button>
            <div className="progressbar-container">
                <div className="progressbar"  onClick={()=>setPercentage(percentage+10)} style={{ 
                    textColor: '#fff',
                    backgroundColor: '#52B6FF',
                    borderRadius:'50%',
                    pathTransitionDuration: 0.3,

                    }}>
                    <CircularProgressbar value={percentage} style={buildStyles({
                        width:100,
                        height:100,
                        
                    })} 
                    text="Hoje"></CircularProgressbar>
                </div>
            </div>
            <button>Histórico</button>
        </FooterStyles>
    )  
}

const FooterStyles=styled.div`

    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:70px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#fff;
    box-shadow: 0px -1px 4px 2px rgba(0,0,0,0.025);

    .progressbar{
        position:absolute;
        left:calc(50% - 50px);
        bottom:10px;
        width:91px;
        height:91px;
        background:#52B6FF;
        color:#fff;
    }

    button{
        height:100%;
        font-size:18px;
        color:#52B6FF;
        background:#fff;
        border:none;
        padding:0px 30px;
    }

`