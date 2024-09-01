import s from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";

type Props = {};
export const Profile = (props: Props) => {
    return (
        <>
            <article className={s.userCard}>
                <div className={s.imgWrapper}>
                    <img
                        src="https://sobakovod.club/uploads/posts/2022-01/1642613507_1-sobakovod-club-p-sobaki-labrador-retriver-kobel-1.jpg"
                        alt=""/>
                </div>

                <ul className={s.userData}>
                    <li>
                        <dt>Name</dt>
                        <dd>Dmitriy</dd>
                    </li>
                    <li>
                        <dt>Birth Date</dt>
                        <dd>06.03.1990</dd>
                    </li>
                    <li>
                        <dt>City</dt>
                        <dd>Msk</dd>
                    </li>
                    <li>
                        <dt>Education</dt>
                        <dd>PGY</dd>
                    </li>
                    <li>
                        <dt>Web Side</dt>
                        <dd>...</dd>
                    </li>
                </ul>
            </article>
         <MyPosts/>
        </>
    );
};