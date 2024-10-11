import {ActionType, MessagesPagePropsType} from "./store";
import {v1} from "uuid";

const UPDATE_NEW_MESSAGES_BODY = 'UPDATE_NEW_MESSAGES_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
        users: [
            {
                id: v1(),
                name: "John",
                src: 'https://avatars.mds.yandex.net/i?id=39012a20de9d0577cc073dc266d44100_l-5278064-images-thumbs&n=13'
            },
            {
                id: v1(),
                name: "Alex",
                src: 'https://avatars.mds.yandex.net/i?id=39012a20de9d0577cc073dc266d44100_l-5278064-images-thumbs&n=13'
            },
            {
                id: v1(),
                name: "Elizabet",
                src: 'https://avatars.mds.yandex.net/i?id=39012a20de9d0577cc073dc266d44100_l-5278064-images-thumbs&n=13'
            },
            {
                id: v1(),
                name: "Mary",
                src: 'https://avatars.mds.yandex.net/i?id=39012a20de9d0577cc073dc266d44100_l-5278064-images-thumbs&n=13'
            },
        ],
        messages: [
            {id: v1(), text: "Hi John"},
            {id: v1(), text: "Hello ! Elizabet"},
            {id: v1(), text: "Yo Mary"},
        ],
        newMessagesBody: '',
    }


export const dialogsReducer = (state: MessagesPagePropsType = initialState, action: ActionType): MessagesPagePropsType => {
    const newState = structuredClone(state)

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