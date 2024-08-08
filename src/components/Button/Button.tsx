import { FC } from "react";
import { IButton } from "./interface";

const Button : FC<IButton> = ({onClick,children}) => {
  return (
    <button onClick={onClick} className="my-2 w-full h-10 bg-[#FF7F3E] shadow-md rounded text-white ">{children}</button>
  )
}
export default Button;
