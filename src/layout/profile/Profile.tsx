import {MyPosts} from "./myPosts/MyPosts";
import {MyPostPropsType, ProfileInfoPropsType} from "../../redux/state";
import {ProfileInfo} from "./profileInfo/ProfileInfo";


type ProfileProps = {
    postData: MyPostPropsType[];
    profile: ProfileInfoPropsType[];
};

export const Profile = ({postData, profile}: ProfileProps) => {
    const usersProfile = profile.map((profile) => <ProfileInfo key={profile.id} {...profile}/>)
    return (
        <>
            {usersProfile}
            <MyPosts posts={postData}/>
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