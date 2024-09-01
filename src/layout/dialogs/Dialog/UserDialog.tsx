import {NavLink} from "react-router-dom";

type UserDialogPropsType = {
    userName: string;
    id: string;
};
export const UserDialog = ({userName, id}: UserDialogPropsType) => {
    return (
        <li>
            <NavLink to={`/dialogs/${id}`}>{userName}</NavLink>
        </li>
    );
};