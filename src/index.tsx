import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store, StateType} from "./Redux/state";

const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(<App profilePage = {state.profilePage}
                         dialogsPage = {state.dialogsPage}/> , document.getElementById('root')
    )}

store.subscribe(rerenderEntireTree)

rerenderEntireTree(store.getState())