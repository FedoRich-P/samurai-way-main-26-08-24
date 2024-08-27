import s from './Aside.module.css'

type Props = {};
export const Aside = (props: Props) => {
    return (
        <aside className={s.aside}>
            <nav>
                <ul className={s.navList}>
                    <li>
                        <a className={`${s.asideLink} ${s.active}`} href="#">Profile</a>
                    </li>
                    <li>
                        <a className={s.asideLink} href="#">Messages</a>
                    </li>
                    <li>
                        <a className={s.asideLink} href="#">News</a>
                    </li>
                    <li>
                        <a className={s.asideLink} href="#">Music</a>
                    </li>
                </ul>
                <a className={s.asideLink} href="#">Settings</a>
            </nav>
        </aside>
    );
};