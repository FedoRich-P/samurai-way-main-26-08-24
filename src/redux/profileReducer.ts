import {ActionType, ProfilePagePropsType,} from "./store";
import {v1} from "uuid";

const src = 'https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj'

const ADD_NEW_POST = 'ADD_NEW_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

const initialState =  {
    postData: [
        {
            id: v1(),
            src: 'https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj',
            text: 'First comment : Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odio.',
            likes: 50,
        },
        {
            id: v1(),
            src: 'https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj',
            text: 'Second comment: Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odio.',
            likes: 100,
        }
    ],
    newPostText: '',
    profile: [
        {
            id: v1(),
            src: "https://sobakovod.club/uploads/posts/2022-01/1642613507_1-sobakovod-club-p-sobaki-labrador-retriver-kobel-1.jpg",
            name: 'Fedorich',
            birthDate: '06.03.1990',
            city: 'Msk',
            education: 'PGY',
            website: '...',
        }
    ],
}

export const profileReducer = (state: ProfilePagePropsType = initialState, action: ActionType): ProfilePagePropsType => {
    const addPost = () => {
        state.postData = [{
            id: v1(),
            src: src,
            likes: 0,
            text: state.newPostText
        }, ...state.postData];
        state.newPostText = '';
    };
    const updateNewPostText = (text: string) => {
        state.newPostText = text;
    };

    switch (action.type) {
        case ADD_NEW_POST: {
            addPost()
            return state
        }
        case UPDATE_NEW_POST_TEXT: {
            updateNewPostText(action.text)
            return state
        }
        default:
            return state
    }
}

export type AddNewPostType = ReturnType<typeof addNewPostAC>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>


export const addNewPostAC = () => {
    return {
        type: ADD_NEW_POST,
    } as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        text: text
    } as const
}