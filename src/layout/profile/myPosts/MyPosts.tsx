import s from './../../../components/button/Button.module.css'
import styles from './MyPosts.module.css'
import {Button} from "../../../components/button/Button";
import {Post} from "./post/Post";
import {MyPostPropsType} from "../../../redux/state";

type MyPostsProps = {
    posts: MyPostPropsType[];
};
export const MyPosts = ({posts}: MyPostsProps) => {

    const postList = posts.map((post) => <Post key={post.id} {...post}/>)
    return (
        <>
            <div>

                <h2 style={{marginBottom: '15px'}}>My posts</h2>
                <form className={styles.form}>
                    <textarea placeholder={'Enter your post'}></textarea>
                    <Button className={`${s.button} ${s.addButton}`}>Add post</Button>
                </form>
                <ul>
                    {postList}
                </ul>
            </div>
        </>
    );
};


// const postData: MyPostPropsType[] = [
//     {
//         id: v1(),
//         src: 'https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj',
//         text: 'First comment : Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odio.',
//         likes: 50,
//     },
//     {
//         id: v1(),
//         src: 'https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj',
//         text:'Second comment: Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odio.',
//         likes: 100,
//     }
// ]