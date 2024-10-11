import s from './../../../components/button/Button.module.css'
import styles from './MyPosts.module.css'
import {Button} from "../../../components/button/Button";
import {Post} from "./post/Post";
import {ActionType,StatePropsType } from "../../../redux/store";
import {ChangeEvent, useState} from 'react';
import {addNewPostAC, profileReducer, updateNewPostTextAC} from "../../../redux/profileReducer";

type MyPostsProps = {
    state: any;
    dispatch: (action: ActionType) => void
};

export const MyPosts = ({state, dispatch}: MyPostsProps) => {
    const postList = state.profileReducer.postData.map((post: any) => <Post key={post.id} {...post}/>)

    const addPostFn = () => {
        dispatch(addNewPostAC())
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextAC(e.currentTarget.value))
        e.target.focus()
    }

    return (
        <>
            <div>
                <h2 style={{marginBottom: '15px'}}>My posts</h2>
                <form className={styles.form}>
                    <textarea value={state.profileReducer.newPostText} onChange={onPostChange} placeholder={'Enter your post'}/>
                    <Button onClick={addPostFn} className={`${s.button} ${s.addButton}`}>Add post</Button>
                </form>
                <ul>
                    {postList}
                </ul>
            </div>
        </>
    );
};
