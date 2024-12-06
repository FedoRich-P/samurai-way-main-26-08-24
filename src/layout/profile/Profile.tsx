import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/post/MyPostsContainer";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../redux/redux-store";
import {ProfilePagePropsType} from "../../redux/store";
import {useEffect} from "react";
import axios from "axios";
import {setUserProfileAC} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";

type ProfileProps = {
    // state: ProfilePagePropsType;
    // dispatch: (action: ActionType) => void;
};

export type DomainUser = {
    userId: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }

}


export const Profile = () => {
    const profile = useSelector<RootState, DomainUser>((state) => state.profile.profile);
    const dispatch = useDispatch()
    const params = useParams();



    console.log(params)

    useEffect(() => {
        const userId = 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${params.id}`).then(res => {
            if(res.data) {
                dispatch(setUserProfileAC(res.data));
            }
        })
    }, [params])
    const usersProfile = <ProfileInfo {...profile}/>
    return (
        <>
            {usersProfile}
            <MyPostsContainer/>
        </>
    );
};

// id: v1(),
// src: "https://sobakovod.club/uploads/posts/2022-01/1642613507_1-sobakovod-club-p-sobaki-labrador-retriver-kobel-1.jpg",
// name: 'Fedorich',
// birthDate: '06.03.1990',
// city: 'Msk',
// education: 'PGY',
// website: '...',