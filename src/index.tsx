import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./Redux/redux-store";
import {StateType} from "./Redux/store";
import {Provider} from "react-redux";




const rerenderEntireTree = (state:StateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
         , document.getElementById('root')
    )}

store.subscribe(()=>rerenderEntireTree(store.getState()))
rerenderEntireTree(store.getState())