import s from './../../../components/button/Button.module.css'
import styles from './MyPosts.module.css'
import {Button} from "../../../components/button/Button";
import {Post} from "./post/Post";
import {ActionType, ProfilePagePropsType} from "../../../redux/store";
import {ChangeEvent} from 'react';
import {addNewPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";

type MyPostsProps = {
    state: ProfilePagePropsType;
    dispatch: (action: ActionType) => void
};

export const MyPosts = ({state: {postData, newPostText}, dispatch}: MyPostsProps) => {

    const postList = postData.map((post: any) => <Post key={post.id} {...post}/>)

    const addPostFn = () => {
        dispatch(addNewPostAC())
        dispatch(updateNewPostTextAC({text: ''}))
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostTextAC({text: e.currentTarget.value}))
        e.target.focus()
    }

    return (
        <>
            <div>
                <h2 style={{marginBottom: '15px'}}>My posts</h2>
                <form className={styles.form}>
                    <textarea
                        value={newPostText}
                        onChange={onPostChange}
                        placeholder={'Enter your post'}/>
                    <Button
                        onClick={addPostFn}
                        className={`${s.button} ${s.addButton}`}>Add post</Button>
                </form>
                <ul>
                    {postList}
                </ul>
            </div>
        </>
    );
};
