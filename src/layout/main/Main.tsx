import {Profile} from "../profile/Profile";
import s from './Main.module.css'

type Props = {};
export const Main = (props: Props) => {
    return (
        <main className={s.main}>
            <Profile/>
        </main>
    );
};