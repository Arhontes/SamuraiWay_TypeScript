import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from "./Components/NavBar/NavBar";
import {ProfileContainer} from "./Components/Profile/Profile/Profile";
import  {DialogsContainer} from "./Components/Dialogs/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {UsersContainer} from "./Components/Users/UsersContainer";




function App() {
    return (

        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>

                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/dialogs/*" element={<DialogsContainer />}/>
                        <Route path="/profile/*" element={<ProfileContainer />}/>
                        <Route path="/users/*" element={ <UsersContainer/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
