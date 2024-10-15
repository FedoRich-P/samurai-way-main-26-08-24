import {MyPosts} from "./myPosts/MyPosts";
import {ActionType, ProfilePagePropsType} from "../../redux/store";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

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
            <MyPosts state={state} dispatch={dispatch}/>
        </>
    );
};