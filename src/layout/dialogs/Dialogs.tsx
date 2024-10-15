import s from './Dialogs.module.css'
import {UserDialog} from "./dialog/UserDialog";
import {Message} from "./messages/Message";
import {ActionType, MessagesPagePropsType} from "../../redux/store";
import {ChangeEvent} from "react";
import {Button} from "../../components/button/Button";
import {sendMessageAC, updateNewMessagesBodyAC} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    state: MessagesPagePropsType;
    dispatch: (action: ActionType) => void;
};

export const Dialogs = ({state : {users, messages, newMessagesBody}, dispatch}: DialogsPropsType) => {

    const usersList = users.map((user) => <UserDialog key={user.id} {...user}/>)
    const messagesList = messages.map((message) => <Message key={message.id} {...message}/>)

    const onSendMessageClick = () => {
        dispatch(sendMessageAC({text: newMessagesBody}))
        dispatch(updateNewMessagesBodyAC({text: ''}))
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessagesBodyAC({text: e.currentTarget.value}))
    }

    return (
        <div className={s.dialogs}>
            <h2 className={s.dialogsTitle}>
                Dialogs
            </h2>
            <ul className={s.dialogsNames}>
                {usersList}
            </ul>
            <div>
                <ul className={s.messages}>
                    {messagesList}
                </ul>
                <form className={s.form}>
                    <textarea
                        value={newMessagesBody}
                        onChange={onNewMessageChange}
                        placeholder={'Enter your message'}>
                    </textarea>
                    <Button
                        type={'button'}
                        onClick={onSendMessageClick}
                        className={`${s.button} ${s.addButton}`}>
                        Send  message
                    </Button>
                </form>
            </div>
        </div>
    );
};
