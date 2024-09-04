import s from './Navbar.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

type Props = {};
export const Navbar = (props: Props) => {
    return (
        <aside className={s.aside}>
            <nav>
                <ul className={s.navList}>
                    <li>
                        <NavLink className={navData => navData.isActive ? `${s.asideLink} ${s.active}` : s.asideLink} to="/profile">Profile</NavLink>
                        {/*<a className={`${s.asideLink} ${s.active}`} href="/profile">Profile</a>*/}
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? `${s.asideLink} ${s.active}` : s.asideLink} to="/dialogs">Messages</NavLink>
                        {/*<a className={s.asideLink} href="dialogs">Messages</a>*/}
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? `${s.asideLink} ${s.active}` : s.asideLink} to="/news">News</NavLink>
                        {/*<a className={s.asideLink} href="#">News</a>*/}
                    </li>
                    <li>
                        <NavLink className={navData => navData.isActive ? `${s.asideLink} ${s.active}` : s.asideLink} to="/music">Music</NavLink>
                        {/*<a className={s.asideLink} href="#">Music</a>*/}
                    </li>
                </ul>
                <NavLink className={navData => navData.isActive ? `${s.asideLink} ${s.active}` : s.asideLink} to="/settings">Settings</NavLink>
                {/*<a className={s.asideLink} href="#">Settings</a>*/}
            </nav>
        </aside>
    );
};