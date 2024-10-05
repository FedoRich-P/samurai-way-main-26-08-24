import {v1} from "uuid";
import {rerenderEntireTree} from "../render";
// import {Simulate} from "react-dom/test-utils";
// import emptied = Simulate.emptied;

const src = 'https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj'
export type MyPostPropsType = {
    id?: string,
    src: string,
    text: string,
    likes: number,
};

export type ProfileInfoPropsType = {
    id: string,
    src: string,
    name: string,
    birthDate: string,
    city: string,
    education: string,
    website: string,
};

export type UsersProps = {
    id: string,
    name: string,
    src: string,
}
export type MessagesProps = {
    id: string,
    text: string,
}
export type ProfilePagePropsType = {
    postData: MyPostPropsType [];
    newPostText: string;
    profile: ProfileInfoPropsType[];
}

export type MessagesPagePropsType = {
    users: UsersProps [];
    messages: MessagesProps[];
}

export type StateProps = {
    profilePage: ProfilePagePropsType;
    messagesPage: MessagesPagePropsType;
}



export const state: StateProps = {

    profilePage : {
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
    },

    messagesPage: {
        users: [
            {id: v1(), name: "John", src: 'https://avatars.mds.yandex.net/i?id=39012a20de9d0577cc073dc266d44100_l-5278064-images-thumbs&n=13'},
            {id: v1(), name: "Alex", src: 'https://avatars.mds.yandex.net/i?id=39012a20de9d0577cc073dc266d44100_l-5278064-images-thumbs&n=13'},
            {id: v1(), name: "Elizabet", src: 'https://avatars.mds.yandex.net/i?id=39012a20de9d0577cc073dc266d44100_l-5278064-images-thumbs&n=13'},
            {id: v1(), name: "Mary", src: 'https://avatars.mds.yandex.net/i?id=39012a20de9d0577cc073dc266d44100_l-5278064-images-thumbs&n=13'},
        ],

        messages: [
            {id: v1(), text: "Hi John"},
            {id: v1(), text: "Hello ! Elizabet"},
            {id: v1(), text: "Yo Mary"},
        ]
    }
}

export const addPost = () => {
    // let {postData, newPostText : text} = state.profilePage
    state.profilePage.postData = [{id: v1(), src: src, likes: 0, text: state.profilePage.newPostText}, ...state.profilePage.postData];
    // state.profilePage.postData.push({id: v1(), src: src, likes: 0, text});
    rerenderEntireTree(state)
}

export const updateNewPostText = (text: string) => {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state)
}
