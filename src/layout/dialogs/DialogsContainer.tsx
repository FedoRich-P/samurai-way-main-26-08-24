import s from './Dialogs.module.css'
import {UserDialog} from "./dialog/UserDialog";
import {Message} from "./messages/Message";
import {ActionType, MessagesPagePropsType} from "../../redux/store";
import {ChangeEvent} from "react";
import {Button} from "../../components/button/Button";
import {sendMessageAC, updateNewMessagesBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";

type DialogsContainerProps = {
    state: MessagesPagePropsType;
    dispatch: (action: ActionType) => void;
};

export const DialogsContainer = ({state, dispatch}: DialogsContainerProps) => {

    const onSendMessageClick = () => {
        dispatch(sendMessageAC({text: state.newMessagesBody}))
        dispatch(updateNewMessagesBodyAC({text: ''}))
    }

    const onNewMessageChange = (text: string) => {
        dispatch(updateNewMessagesBodyAC({text}))
    }

    return (
        <Dialogs sendMessage={onSendMessageClick} upDateNewMessageBody={onNewMessageChange} state={state}/>
    );
};
