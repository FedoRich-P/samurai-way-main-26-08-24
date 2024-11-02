import React, {ChangeEvent} from 'react';
import type {ActionType, ProfilePagePropsType} from "../../../../redux/store";
import {addNewPostAC, updateNewPostTextAC} from "../../../../redux/profileReducer";
import {MyPosts} from "../MyPosts";
import {dblClick} from "@testing-library/user-event/dist/click";


type MyPostsContainerProps = {
    state: ProfilePagePropsType;
    dispatch: (action: ActionType) => void
};

export const MyPostsContainer = ({state, dispatch}: MyPostsContainerProps) => {
    const addPostFn = () => {
        dispatch(addNewPostAC())
        dispatch(updateNewPostTextAC({text: ''}))
    }
    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextAC({text: e.currentTarget.value}))
        e.target.focus()
    }

    return (
        <MyPosts addPost={addPostFn} updateNewPostText={onPostChange} state={state}/>
    );
};
