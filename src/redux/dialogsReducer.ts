import {ActionType, MessagesPagePropsType, SEND_MESSAGE, UPDATE_NEW_MESSAGES_BODY} from "./state";
import {v1} from "uuid";

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