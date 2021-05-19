import React from 'react'
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import HabitsPage from './components/Habits/HabitsPage'
import TodayPage from './components/Habits/TodayPage'
import History from './components/Habits/History'

import logo from './img/logo.png'

export default function App(){

    return(
        <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Login logo={logo}/>
                </Route>
                <Route path="/signup" exact>
                    <SignUp logo={logo}/>
                </Route>
                <Route path="/habits" exact>
                    <HabitsPage />
                </Route>
                <Route path="/today" exact>
                    <TodayPage />
                </Route>
                <Route path="/history" exact>
                    <History />
                </Route>
            </Switch>
        </BrowserRouter>
        </>
        )
}

