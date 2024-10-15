import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";

const rerenderEntireTree = (state: any )  => {
    ReactDOM.render(
        <App
            state={state}
            dispatch={store.dispatch}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(()=> {
    rerenderEntireTree(store.getState())
})
