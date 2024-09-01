type MessagePropsType = {
    text: string;
    id: string;
};
export const Message = ({text, id}: MessagePropsType) => {
    return (
        <li>{text}</li>
    );
};