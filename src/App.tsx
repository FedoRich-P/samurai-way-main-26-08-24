import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Navbar} from "./layout/navbar/Navbar";
import {Dialogs} from "./layout/dialogs/Dialogs";
import {Profile} from "./layout/profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./layout/news/News";
import {Settings} from "./layout/settings/Settings";
import {Music} from "./layout/music/Music";
import {MessagesProps, MyPostPropsType, ProfileInfoPropsType, UsersProps} from "./redux/state";

type ProfilePageProps = {
    postData: MyPostPropsType[]
    profile: ProfileInfoPropsType[]
}

type MessagesPageProps = {
    users: UsersProps[]
    messages: MessagesProps[]
}

type AppProps = {
    profilePage: ProfilePageProps,
    messagesPage: MessagesPageProps,
    addPost: (value: string)=> void;
}

function App({profilePage, messagesPage, addPost}: AppProps) {
    return (
        <BrowserRouter>
            <div className={'container'}>
                <div className={'app-wrapper'}>
                    <Header/>
                    <Navbar/>
                    <main className="main">
                        <Routes>
                            <Route path={'/profile'} element={<Profile state={profilePage} addPost={addPost}/>}/>
                            <Route path={'/dialogs/*'} element={<Dialogs state={messagesPage}/>}/>
                            <Route path={'/news'} element={<News/>}/>
                            <Route path={'/music'} element={<Music/>}/>
                            <Route path={'/settings'} element={<Settings/>}/>
                        </Routes>
                    </main>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;


{/*<Route path={'/profile'} element={<Profile {...profilePage} addPost={addPost}/>}/>*/}
{/*<Route path={'/dialogs/*'} element={<Dialogs {...messagesPage}/>}/>*/}