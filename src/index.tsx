import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/redux-store";
import {StateType} from "./Redux/store";




const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(<App dialogsPage={state.dialogsPage} profilePage={state.profilePage}  /> , document.getElementById('root')
    )}

store.subscribe(()=>rerenderEntireTree(store.getState()))
rerenderEntireTree(store.getState())