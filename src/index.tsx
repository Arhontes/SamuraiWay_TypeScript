import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./Redux/state";



ReactDOM.render(
    <App profilePage={state.profilePage} dialogsPage={state.dialogsPage}/>, document.getElementById('root')
);