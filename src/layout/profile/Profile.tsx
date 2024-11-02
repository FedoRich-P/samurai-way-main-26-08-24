import {MyPosts} from "./myPosts/MyPosts";
import {ActionType, ProfilePagePropsType} from "../../redux/store";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/post/MyPostsContainer";

type ProfileProps = {
    state: ProfilePagePropsType;
    dispatch: (action: ActionType) => void;
};


export const Profile = ({state, dispatch}: ProfileProps) => {
    const {profile} = state;
    const usersProfile = <ProfileInfo {...profile[0]}/>
    return (
        <>
            {usersProfile}
            <MyPostsContainer state={state} dispatch={dispatch}/>
        </>
    );
};