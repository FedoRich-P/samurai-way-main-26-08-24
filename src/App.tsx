import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Aside} from "./layout/aside/Aside";
import {Main} from "./layout/main/Main";

function App() {
    return (
        <div className={'container'}>
            <div className={'app-wrapper'}>
                <Header/>
                <Aside/>
                <Main/>
            </div>
        </div>
    );
}

export default App;
