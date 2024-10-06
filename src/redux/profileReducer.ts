import {ActionType, ADD_NEW_POST, ProfilePagePropsType, UPDATE_NEW_POST_TEXT} from "./state";
import {v1} from "uuid";

const src = 'https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj'

export const profileReducer = (state: ProfilePagePropsType, action: ActionType): ProfilePagePropsType => {
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