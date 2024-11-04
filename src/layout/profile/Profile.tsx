import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {MyPostsContainer} from "./myPosts/post/MyPostsContainer";
import {useSelector} from "react-redux";
import type {RootState} from "../../redux/redux-store";
import {ProfilePagePropsType} from "../../redux/store";

type ProfileProps = {
    // state: ProfilePagePropsType;
    // dispatch: (action: ActionType) => void;
};


export const Profile = () => {
    const state = useSelector<RootState, ProfilePagePropsType>((state) => state.profile);
// export const Profile = ({state, dispatch}: ProfileProps) => {
//     const {profile} = state;
    const usersProfile = <ProfileInfo {...state.profile[0]}/>
    return (
        <>
            {usersProfile}
            <MyPostsContainer/>
            {/*<MyPostsContainer state={state} dispatch={dispatch}/>*/}
        </>
    );
};