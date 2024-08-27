type Props = {};
export const Aside = (props: Props) => {
    return (
        <aside className={'aside'}>
            <nav>
                <ul className={'nav-list'}>
                    <li>
                        <a href="#">Profile</a>
                    </li>
                    <li>
                        <a href="#">Messages</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Music</a>
                    </li>
                </ul>
                <a href="#">Settings</a>
            </nav>
        </aside>
    );
};