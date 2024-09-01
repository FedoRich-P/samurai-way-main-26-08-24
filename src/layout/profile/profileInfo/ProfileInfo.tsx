import s from './ProfileInfo.module.css'

type ProfileInfoPropsType = {
    src: string;
    name: string;
    birthDate: string;
    city: string;
    education: string;
    website: string;
};
export const ProfileInfo = (props: ProfileInfoPropsType) => {
    const {
        src, name, birthDate, city, education, website,
    } = props
    return (
        <>
            <article className={s.userCard}>
                <div className={s.imgWrapper}>
                    <img
                        src={src}
                        alt="User photo"/>
                </div>

                <ul className={s.userData}>
                    <li>
                        <dt>Name</dt>
                        <dd>{name}</dd>
                    </li>
                    <li>
                        <dt>Birth Date</dt>
                        <dd>{birthDate}</dd>
                    </li>
                    <li>
                        <dt>City</dt>
                        <dd>{city}</dd>
                    </li>
                    <li>
                        <dt>Education</dt>
                        <dd>{education}</dd>
                    </li>
                    <li>
                        <dt>Web Side</dt>
                        <dd>{website}</dd>
                    </li>
                </ul>
            </article>
        </>
    );
};