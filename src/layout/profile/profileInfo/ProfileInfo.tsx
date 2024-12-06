import s from './ProfileInfo.module.css'
import {DomainUser} from "../Profile";

// id: v1(),
// src: "https://sobakovod.club/uploads/posts/2022-01/1642613507_1-sobakovod-club-p-sobaki-labrador-retriver-kobel-1.jpg",
// name: 'Fedorich',
// birthDate: '06.03.1990',
// city: 'Msk',
// education: 'PGY',
// website: '...',

// export type DomainUser = {
//     userId: string
//     lookingForAJob: boolean
//     lookingForAJobDescription: string
//     fullName: string
//     contacts: {
//         github: string
//         vk: string
//         facebook: string
//         instagram: string
//         twitter: string
//         website: string
//         youtube: string
//         mainLink: string
//     }
//     photos: {
//         small: string
//         large: string
//     }
//
// }

export const ProfileInfo = (user: DomainUser) => {
    const {fullName, photos, aboutMe, lookingForAJob
    } = user
    return (
        <>
            <article className={s.userCard}>
                <div className={s.imgWrapper}>
                    <img
                        src={photos?.large}
                        alt="User photo"/>
                </div>

                <ul className={s.userData}>
                    <li>
                        <dt>Name</dt>
                        <dd>{fullName}</dd>
                    </li>
                    <li>
                        <dt>About me</dt>
                        <dd>{aboutMe}</dd>
                    </li>
                    <li>
                        <dt>Looking for a job</dt>
                        <dd> {lookingForAJob ? 'Yes' : "No"} </dd>
                    </li>
                    {/*<li>*/}
                    {/*    <dt>Birth Date</dt>*/}
                    {/*    <dd>{birthDate}</dd>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <dt>City</dt>*/}
                    {/*    <dd>{city}</dd>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <dt>Education</dt>*/}
                    {/*    <dd>{education}</dd>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <dt>Web Side</dt>*/}
                    {/*    <dd>{website}</dd>*/}
                    {/*</li>*/}
                </ul>
            </article>
        </>
    );
};