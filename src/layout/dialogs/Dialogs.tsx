import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {UserDialog} from "./Dialog/UserDialog";
import {v1} from "uuid";
import {Message} from "./Messages/Message";

type DialogsPropsType = {};

const users = [
    {id: v1(), name: "John"},
    {id: v1(), name: "Alex"},
    {id: v1(), name: "Elizabet"},
    {id: v1(), name: "Mary"},
]

const messages = [
    {id: v1(), text: "Hi John"},
    {id: v1(), text: "Hello ! Elizabet"},
    {id: v1(), text: "Yo Mary"},
]
export const Dialogs = (props: DialogsPropsType) => {
    const usersList = users.map((user) => <UserDialog key={user.id} userName={user.name} id={user.id}/>)
    const messagesList = messages.map((message) => <Message key={message.id} text={message.text} id={message.id}/>)
    return (
        <div className={s.dialogs}>
            <h2 className={s.dialogsTitle}>
                Dialogs
            </h2>
            <ul className={s.dialogsNames}>
                {usersList}
            </ul>
            <ul className={s.messages}>
                {messagesList}
            </ul>
        </div>
    );
};