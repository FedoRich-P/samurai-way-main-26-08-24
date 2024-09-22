import s from './UserDialog.module.css'
import {NavLink} from "react-router-dom";

type UserDialogPropsType = {
    userName: string;
    id: string;
    src: string;
};
export const UserDialog = ({userName, id, src}: UserDialogPropsType) => {
    return (
        <li>
            <NavLink className={s.dialog} to={`/dialogs/${id}`}>
                <img className={s.dialogAvatar} src={src} alt="User Photo"/>
                <span>{userName}</span>
            </NavLink>
        </li>
    );
};