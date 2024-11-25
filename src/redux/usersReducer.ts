import {v1} from "uuid";

const imgSrc = 'https://avatars.mds.yandex.net/i?id=39012a20de9d0577cc073dc266d44100_l-5278064-images-thumbs&n=13'

type UserLocation = {
    city: string,
    country: string
}

export type User = {
    id:string,
    fullName: string,
    status: string,
    location: UserLocation,
    followed: boolean,
    src: string
}

const initialState = {
    users: <User[]>[
        {
            id: v1(),
            fullName: "Elizabet",
            status: 'Big-Boss',
            location: {
                city: 'Moscow',
                country: 'RF'
            },
            followed: true,
            src: imgSrc
        },
        {
            id: v1(),
            fullName: "Mary",
            status: 'Boss',
            location: {
                city: 'Moscow',
                country: 'RF'
            },
            followed: true,
            src: imgSrc
        },
        {
            id: v1(),
            fullName: "John",
            status: 'Worker',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            },
            followed: false,
            src: imgSrc
        },
    ],
}

export const usersReducer = (state = initialState, action: UsersAction) => {
    switch (action.type) {
        case 'FOLLOW':
        case 'UNFOLLOW': {
            const {userId, isFollowed} = action.payload;
            return {...state, users: state.users.map(user => user.id === userId ? {...user, followed: isFollowed} : user)};
        }
        case 'SET_USERS': {
            return {...state, users: [...state.users, ...action.payload.users]};
        }
        default:
            return state
    }
}

export const followAC = (payload: {userId: string, isFollowed: boolean}) => {
    return {type: 'FOLLOW', payload} as const
}
export const unFollowAC = (payload: {userId: string, isFollowed: boolean}) => {
    return {type: 'UNFOLLOW', payload} as const
}
export const setUsersAC = (payload: {users: User[]}) => {
    return {type: 'SET_USERS', payload} as const
}

export type FollowACType = ReturnType<typeof followAC>
export type UnFollowACType = ReturnType<typeof unFollowAC>
export type SetUsersACType = ReturnType<typeof setUsersAC>

type UsersAction = FollowACType | UnFollowACType | SetUsersACType


// {
//     const {userId, isFollowed} = action.payload;
//     return {...state, users: state.users.map(user => user.id === userId ? {...user, followed: isFollowed} : user)};
// }