import {MyPosts} from "./myPosts/MyPosts";
import {ActionType, StatePropsType} from "../../redux/store";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

type ProfileProps = {
    state: StatePropsType
    dispatch: (action: ActionType) => void
};


export const Profile = ({state, dispatch}: ProfileProps) => {
    const {profile} = state.profilePage;
    const usersProfile = profile.map((profile) => <ProfileInfo key={profile.id} {...profile}/>)
    return (
        <>
            {usersProfile}
            <MyPosts state={state} dispatch={dispatch}/>
        </>
    );
};