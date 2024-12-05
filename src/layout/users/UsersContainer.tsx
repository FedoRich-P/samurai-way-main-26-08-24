import s from './Users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {MouseEventHandler, useEffect} from "react";
import type {RootState} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserFromData
} from "../../redux/usersReducer";
import axios from "axios";

const imgSrc = 'https://avatars.mds.yandex.net/i?id=39012a20de9d0577cc073dc266d44100_l-5278064-images-thumbs&n=13'

type Props = {};
export const UsersContainer = (props: Props) => {
    const dispatch = useDispatch();

    const users = useSelector<RootState, UserFromData[]>((state) => state.users.users);
    const pageSize = useSelector<RootState, number>((state) => state.users.pageSize);
    const totalUserCount = useSelector<RootState, number>((state) => state.users.totalCount);
    const currentPage = useSelector<RootState, number>((state) => state.users.currentPage);

    console.log(totalUserCount)
    const pagesCount = totalUserCount ? Math.ceil(totalUserCount / pageSize) : 1;

    const follow = (userId: number, isFollowed: boolean) => {
        dispatch(followAC({userId, isFollowed}))
    }

    const unFollow = (userId: number, isFollowed: boolean) => {
        dispatch(unFollowAC({userId, isFollowed}))
    }

    const setCurrentPage = (value: number) => {
        dispatch(setCurrentPageAC({currentPage: value}))
        console.log(value)
    }

    const pages = [];
    if (pagesCount > 1) {
        for (let i = 0; i < 10; i++) {
            pages.push(i + 1)
        }
    }

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then(res => {
            if (res.data.items) {
                dispatch(setUsersAC({users: res.data.items}))
                dispatch(setTotalUsersCountAC({totalCount: res.data.totalCount}))
            }
            // if (res.data.items) dispatch(setUsersAC({users: res.data.items, totalCount: res.data.totalCount}))
        })
    }, [currentPage])

    return (
        <>
            <ul style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: "center",
                gap: '20px',
                marginBottom: '15px'
            }}>
                {pages.map(btn => {
                    return (
                        <li key={btn}>
                            <button onClick={() => setCurrentPage(btn)} className={s.button}>Page : {btn} </button>
                        </li>
                    )
                })
                }
            </ul>
            <ul>
                {users?.map((user: UserFromData) => (
                    user && <li key={user.id} className={s.userItem}>
                        <h2>{user.name}</h2>
                        <div className={s.userImg}>
                            <img src={user.photos.small ? user.photos.small : imgSrc} alt={user.name}/>
                        </div>
                        <h3>{user.status ? user.status : `${user.name} пока без статуса`}</h3>
                        <div className={s.userButton}>
                            {
                                user.followed
                                    ? <button onClick={() => follow(user.id, !user.followed)}
                                              className={s.button}>Follow</button>
                                    : <button onClick={() => unFollow(user.id, !user.followed)}
                                              className={s.button}>UnFollow</button>
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

// const setUsers = () => {
//     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
//         dispatch(setUsersAC({users: res.data.items}))
//     })
// }