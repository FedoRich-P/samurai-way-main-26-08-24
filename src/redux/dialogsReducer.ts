import {ActionType, MessagesPagePropsType} from "./state";
import {v1} from "uuid";

const UPDATE_NEW_MESSAGES_BODY = 'UPDATE_NEW_MESSAGES_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'
export type UpdateNewMessagesBodyType = ReturnType<typeof updateNewMessagesBodyAC>
export type SendMessageType = ReturnType<typeof sendMessageAC>
export const updateNewMessagesBodyAC = (text: string) => {
    return {
        type: UPDATE_NEW_MESSAGES_BODY,
        text
    } as const
}
export const sendMessageAC = (text: string) => {
    return {
        type: SEND_MESSAGE,
        text
    } as const
}

export const dialogsReducer = (state: MessagesPagePropsType, action: ActionType): MessagesPagePropsType => {
    const updateNewMessagesBody = (text: string) => {
        state.newMessagesBody = text
    };
    const sendMessageBody = () => {
        let text = state.newMessagesBody;
        state.newMessagesBody = ''
        state.messages = [
            ...state.messages,
            {id: v1(), text},
        ]
    };

    switch (action.type) {
        case UPDATE_NEW_MESSAGES_BODY: {
            updateNewMessagesBody(action.text)
            return state;
        }
        case SEND_MESSAGE: {
            sendMessageBody()
            return state;
        }
        default :
            return state;
    }

}