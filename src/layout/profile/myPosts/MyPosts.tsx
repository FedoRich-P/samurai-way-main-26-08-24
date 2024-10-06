import s from './../../../components/button/Button.module.css'
import styles from './MyPosts.module.css'
import {Button} from "../../../components/button/Button";
import {Post} from "./post/Post";
import {ActionType, addNewPostAC, StatePropsType, updateNewPostTextAC} from "../../../redux/state";
import {ChangeEvent, useState} from 'react';

type MyPostsProps = {
    state: StatePropsType;
    dispatch: (action: ActionType) => void
};

export const MyPosts = ({state, dispatch}: MyPostsProps) => {

    const postList = state.profilePage.postData.map((post) => <Post key={post.id} {...post}/>)

    // const [value, setValue] = useState<string>(state.profilePage.newPostText)

    const addPostFn = () => {
        dispatch(addNewPostAC())
        // setValue(state.profilePage.newPostText)
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // setValue(e.currentTarget.value)
        dispatch(updateNewPostTextAC(e.currentTarget.value))
        e.target.focus()
    }

    return (
        <>
            <div>
                <h2 style={{marginBottom: '15px'}}>My posts</h2>
                <form className={styles.form}>
                    <textarea value={state.profilePage.newPostText} onChange={onPostChange} placeholder={'Enter your post'}/>
                    <Button onClick={addPostFn} className={`${s.button} ${s.addButton}`}>Add post</Button>
                </form>
                <ul>
                    {postList}
                </ul>
            </div>
        </>
    );
};
