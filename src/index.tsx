import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {state, StateType, subscribe} from "./Redux/state";

const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(<App profilePage = {state.profilePage}
                         dialogsPage = {state.dialogsPage}/> , document.getElementById('root')
    )}

subscribe(rerenderEntireTree)

rerenderEntireTree(state)