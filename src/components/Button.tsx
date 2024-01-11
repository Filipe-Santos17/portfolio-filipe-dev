import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string,
  btnStyle?: string,
  isDisabled?: boolean,
  handleClickButton?: () => void | null,
  typeBtn?: "submit" | "button"
}

export default function Button({ content, btnStyle = "", isDisabled = false, handleClickButton, typeBtn = "button" }: ButtonProps) {
  return (
    <button className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${btnStyle}`} disabled={isDisabled} onClick={handleClickButton} type={typeBtn}>{content}</button>
  )
}