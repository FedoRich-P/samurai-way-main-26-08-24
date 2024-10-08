import s from './Dialogs.module.css'
import {UserDialog} from "./dialog/UserDialog";
import {Message} from "./messages/Message";
import {ActionType, StatePropsType} from "../../redux/state";
import {ChangeEvent} from "react";
import {Button} from "../../components/button/Button";
import {sendMessageAC, updateNewMessagesBodyAC} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    state: StatePropsType
    dispatch: (action: ActionType) => void
};


export const Dialogs = ({state, dispatch}: DialogsPropsType) => {
    const {users, messages, newMessagesBody} = state.messagesPage
    const usersList = users.map((user) => <UserDialog key={user.id} userName={user.name} id={user.id} src={user.src}/>)
    const messagesList = messages.map((message) => <Message key={message.id} text={message.text} id={message.id}/>)

    const onSendMessageClick = () => {
        dispatch(sendMessageAC(newMessagesBody))
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessagesBodyAC(e.currentTarget.value))
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
                        placeholder={'Enter your message'}
                    >
                    </textarea>
                    <Button type={'button'} onClick={onSendMessageClick} className={`${s.button} ${s.addButton}`}>Send
                        message</Button>
                </form>
            </div>
        </div>
    );
};
