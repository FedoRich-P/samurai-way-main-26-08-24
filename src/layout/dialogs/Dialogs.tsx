import s from './Dialogs.module.css'
import {UserDialog} from "./dialog/UserDialog";
import {v1} from "uuid";
import {Message} from "./messages/Message";
import {MessagesProps, UsersProps} from "../../redux/state";

type MessagesPagePropsType = {
    users: UsersProps[],
    messages: MessagesProps[],
};

type DialogsPropsType = {
   state: MessagesPagePropsType,
};


export const Dialogs = ({state}: DialogsPropsType) => {
    const {users, messages} = state;
    const usersList = users.map((user) => <UserDialog key={user.id} userName={user.name} id={user.id} src={user.src}/>)
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
