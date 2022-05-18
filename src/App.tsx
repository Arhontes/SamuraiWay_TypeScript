import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import {StateType} from "./Redux/state";


function App({dialogsPage,profilePage}:StateType) {
    return (

        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>

                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs dialogsPage={dialogsPage}/>}/>
                        <Route path="/profile" element={<Profile profilePage={profilePage}/>}/>
                        {/*<Route path="/news" element={<Profile/>}/>
                        <Route path="/music" element={<Profile/>}/>*/}
                    </Routes>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
