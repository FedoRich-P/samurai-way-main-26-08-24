import './index.css';
import {rerenderEntireTree} from "./render";
import {state} from "./redux/state";

rerenderEntireTree(state)


// export type MyPostPropsType = {
//     id?: string;
//     text: string;
//     src: string;
//     likes: number;
// };
// const postData: MyPostPropsType[] = [
//     {
//         id: v1(),
//         src: 'https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj',
//         text: 'First comment : Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odio.',
//         likes: 50,
//     },
//     {
//         id: v1(),
//         src: 'https://yt3.googleusercontent.com/gNPWe_Z8GKUvjGzTvGSbqvpwUMEfUFtozENoQgyQnxuFuF3fe5bq5tsWm8o0QuwMaeb2ICycHQ=s900-c-k-c0x00ffffff-no-rj',
//         text:'Second comment: Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, odio.',
//         likes: 100,
//     }
// ]
//
// export type ProfileInfoPropsType = {
//     id: string;
//     src: string;
//     name: string;
//     birthDate: string;
//     city: string;
//     education: string;
//     website: string;
// };
// const profile : ProfileInfoPropsType[] = [
//     {
//         id: v1(),
//         src: "https://sobakovod.club/uploads/posts/2022-01/1642613507_1-sobakovod-club-p-sobaki-labrador-retriver-kobel-1.jpg",
//         name: 'Fedorich',
//         birthDate: '06.03.1990',
//         city: 'Msk',
//         education: 'PGY',
//         website: '...',
//     }
// ]
//
// export type UsersProps = {
//     id: string;
//     name: string;
// }
// const users: UsersProps[] = [
//     {id: v1(), name: "John"},
//     {id: v1(), name: "Alex"},
//     {id: v1(), name: "Elizabet"},
//     {id: v1(), name: "Mary"},
// ]
//
// export type MessagesProps = {
//     id: string;
//     text: string;
// }
// const messages: MessagesProps[] = [
//     {id: v1(), text: "Hi John"},
//     {id: v1(), text: "Hello ! Elizabet"},
//     {id: v1(), text: "Yo Mary"},
// ]