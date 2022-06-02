import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {store, StoreType} from "./Redux/state";

const rerenderEntireTree = (store:StoreType) => {
    ReactDOM.render(<App profilePage = {store.getState().profilePage}
                         dialogsPage = {store.getState().dialogsPage}/> , document.getElementById('root')
    )}

store.subscribe(()=>rerenderEntireTree(store))

rerenderEntireTree(store)