import s from './Post.module.css'
import styles from './Post.module.css'
import {Button} from "../../../../components/button/Button";
import buttonStyle from "../../../../components/button/Button.module.css";

type MyPostPropsType = {
    postId?: string;
    postText: string;
    postSrc: string;
    postLikes: number;
};
export const Post = ({postId, postSrc, postText, postLikes}: MyPostPropsType) => {
    return (
        <>
            <li className={s.postItem} key={postId}>
                <div className={s.description}>
                    <div className={s.imageWrapper}>
                        <img src={postSrc} alt="User post image"/>
                    </div>
                    <p className={s.descr}>{postText}</p>
                </div>
                <div>
                    <span className={s.postsLikes}>Likes : {postLikes}</span>
                    <Button className={buttonStyle.button}>Like</Button>
                </div>
            </li>
        </>
    );
};