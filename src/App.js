import React from 'react'
import { BrowserRouter , Switch, Route } from 'react-router-dom'
import UserContext from './contexts/UserContext'
import TodayContext from './contexts/TodayContext'
import HabitsContext from './contexts/HabitsContext'
import PercentageContext from './contexts/PercentageContext'

import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import HabitsPage from './components/Habits/HabitsPage'
import TodayPage from './components/Habits/TodayPage'
import History from './components/Habits/History'

import logo from './img/logo.png'

export default function App(){

    const [user, setUser] = React.useState({});
    const [habits, setHabits] = React.useState([]);
    const [percentage , setPercentage] = React.useState(10);
    const [todayHabits, setTodayHabits] = React.useState([]);

    return(
        <UserContext.Provider value={{user, setUser}}>
            <HabitsContext.Provider value={{habits, setHabits}}>
                <TodayContext.Provider value={{todayHabits, setTodayHabits}}>
                    <PercentageContext.Provider value={{percentage, setPercentage}}>
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
                    </PercentageContext.Provider>
                </TodayContext.Provider>
            </HabitsContext.Provider>
        </UserContext.Provider>
        )
}

