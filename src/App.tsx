import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import store from "./Redux/redux-store";
import {StateType} from "./Redux/store";




function App(props:StateType) {
    return (

        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>

                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.dialogsPage}/>}/>
                        <Route path="/profile" element={<Profile profilePage={props.profilePage} dispatch={store.dispatch.bind(store)} />}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>

    );
}

export default App;
