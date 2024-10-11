import {MyPosts} from "./myPosts/MyPosts";
import {ActionType} from "../../redux/store";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

type ProfileProps = {
    state: any
    dispatch: (action: ActionType) => void
};


export const Profile = ({state, dispatch}: ProfileProps) => {
    const {profile} = state.profileReducer;
    const usersProfile = <ProfileInfo key={profile.id} {...profile}/>
    // const usersProfile = Object.values(profile[0]).map((profile) => <ProfileInfo {...profile}/>)
    return (
        <>
            {usersProfile}
            <MyPosts state={state} dispatch={dispatch}/>
        </>
    );
};