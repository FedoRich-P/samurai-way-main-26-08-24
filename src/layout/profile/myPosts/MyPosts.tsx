import s from './../../../components/button/Button.module.css'
import styles from './MyPosts.module.css'
import {Button} from "../../../components/button/Button";
import {Post} from "./post/Post";

type Props = {};
export const MyPosts = (props: Props) => {
    return (
        <>
            <div>
                <h2 style={{marginBottom: '15px'}}>My posts</h2>
                <form className={styles.form}>
                    <textarea></textarea>
                    <Button className={`${s.button} ${s.addButton}`}>Add post</Button>
                </form>

                <ul>
                    <Post
                        postSrc={'https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj'}
                        postText={'First comment'}
                        postId={'1'}
                        postLikes={10}
                    />
                    <Post
                        postSrc={'https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj'}
                        postText={'Second comment'}
                        postId={'2'}
                        postLikes={50}
                    />
                </ul>
            </div>
        </>
    );
};