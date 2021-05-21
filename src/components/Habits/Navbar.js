import styled from 'styled-components'
import headerLogo from './../../img/header-logo.png'
import React, {useContext} from 'react'
import UserContext from '../../contexts/UserContext'

export default function Navbar(){

    const {user} = useContext(UserContext);
    //functions

    return(
        <NavbarStyles>
            <img src={headerLogo} alt="app logo"/>
            <div className="profile-picture" >
                <img src={user.image} alt="profile" />
            </div>
        </NavbarStyles>
    )
}

const NavbarStyles = styled.div`

    position:fixed;
    z-index:10;
    top:0;
    left:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    height:70px;
    padding:0px 18px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.20);

    .profile-picture{
        width:51px;
        height:51px;
        border-radius: 50%;
        overflow:hidden;
    }
    .profile-picture img{
        width:51px;
        height:51px;
    }

`