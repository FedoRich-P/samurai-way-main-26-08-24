import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import type {RootState} from "../../redux/redux-store";
import {ProfilePagePropsType} from "../../redux/store";
import {followAC, setUsersAC, unFollowAC, User} from "../../redux/usersReducer";

type Props = {};
export const UsersContainer = (props: Props) => {
    const dispatch = useDispatch();

    const users = useSelector<RootState, User[]>((state) => state.users.users);

    const follow = (userId: string, isFollowed: boolean) => {
        dispatch(followAC({userId, isFollowed}))
    }

    const unFollow = (userId: string, isFollowed: boolean) => {
        dispatch(unFollowAC({userId, isFollowed}))
    }


    const setUsers = (users: User[]) => {
        dispatch(setUsersAC({users}))
    }

    useEffect(() => {
        console.log(users);
    }, [users])

    return (
        <div>
            {users.map((user: User) => (
                <div key={user.id}>
                    <h2>{user.fullName}</h2>
                    <h3>{user.status}</h3>
                    <div style={{width: 100, height: 100}}>
                        <img src={user.src} alt={user.fullName}/>
                    </div>
                    <div>
                        {
                            user.followed
                                ? <button onClick={() => follow(user.id, !user.followed)}>Follow</button>
                                : <button onClick={() => unFollow(user.id, !user.followed)}>UnFollow</button>
                        }
                    </div>
                </div>
            ))}
        </div>
    );
};