import {MyPosts} from "./myPosts/MyPosts";
import {MyPostPropsType, ProfileInfoPropsType, ProfilePagePropsType} from "../../redux/state";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

type ProfileProps = {
    state: ProfilePagePropsType
    addPost: () => void;
    updateNewPostText: (value: string) => void;
};


export const Profile = ({state, addPost, updateNewPostText}: ProfileProps) => {
    const usersProfile = state.profile.map((profile) => <ProfileInfo key={profile.id} {...profile}/>)
    return (
        <>
            {usersProfile}
            <MyPosts posts={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
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