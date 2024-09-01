import {ButtonHTMLAttributes, MouseEvent} from "react";


type ButtonPropsType = {

} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props: ButtonPropsType) => {

    const { className, children, ...restProps } = props

   const  onClickButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {

    }
    return (
        <button onClick={onClickButtonHandler} className={className}>{children}</button>
    )
};