import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {DialogsContainer} from "./Components/Dialogs/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UsersContainer} from "./Components/Users/UsersContainer";
import { ProfileContainer } from './Components/Profile/Profile/ProfileContainer';
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/Login";


function App() {


    return (

        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <NavBar/>

                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="/profile/*" element={<ProfileContainer/>}/>
                        <Route path="/users/*" element={<UsersContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
