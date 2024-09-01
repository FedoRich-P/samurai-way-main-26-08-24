import s from './Profile.module.css'
import {MyPosts} from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {v1} from "uuid";

type Props = {};

const profileInfo = [
    {
        id: v1(),
        src: "https://sobakovod.club/uploads/posts/2022-01/1642613507_1-sobakovod-club-p-sobaki-labrador-retriver-kobel-1.jpg",
        name: 'Fedorich',
        birthDate: '06.03.1990',
        city: 'Msk',
        education: 'PGY',
        website: '...',
    }
]

export const Profile = (props: Props) => {
    const usersProfile = profileInfo.map((profile) => <ProfileInfo key={profile.id} {...profile}/>)
    return (
        <>
            {usersProfile}
            <MyPosts/>
        </>
    );
};

// <article className={s.userCard}>
//     <div className={s.imgWrapper}>
//         <img
//             src=
//                 alt=""/>
//     </div>
//
//     <ul className={s.userData}>
//         <li>
//             <dt>Name</dt>
//             <dd>Dmitriy</dd>
//         </li>
//         <li>
//             <dt>Birth Date</dt>
//             <dd>06.03.1990</dd>
//         </li>
//         <li>
//             <dt>City</dt>
//             <dd>Msk</dd>
//         </li>
//         <li>
//             <dt>Education</dt>
//             <dd>PGY</dd>
//         </li>
//         <li>
//             <dt>Web Side</dt>
//             <dd>...</dd>
//         </li>
//     </ul>
// </article>