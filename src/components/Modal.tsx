import { Link } from "react-router-dom";
import { MouseEvent } from "react";
import { TypeChangeModalState } from "@/types";
import useLanguage from "../hooks/useLanguage";
import BtnActions from "./BtnActions";

type TypeLinkProps = {
  text: string,
  linkTo: string
  action: () => void
}

const LiLink = ({ text, linkTo, action }: TypeLinkProps) => (
  <Link className="relative text-black dark:text-white my-2" to={linkTo} onClick={action}>
    {text}
    <span className="h-[1px] inline-block bg-white absolute left-0 -bottom-0.5 hover:w-full transition-[30px] ease duration-300 w-0 dark:bg-dark" />
  </Link>
)

export default function Modal({ changeModal }: TypeChangeModalState) {
  const { t } = useLanguage()

  function handleClickOutside(e: MouseEvent<HTMLDivElement, MouseEvent>): void {
    if (e.target === e.currentTarget) {
      changeModal(false)
    }
  }

  function ToogleModal() {
    changeModal(false)
  }

  return (
    <div className="fixed w-screen h-screen flex items-center justify-center inset-0 z-20 bg-modalBg" onClick={handleClickOutside}>
      <div className="w-[20rem] h-max bg-white dark:bg-slate-800 p-8 rounded-md">
        <ul className="w-full flex flex-col gap-4 text-center">
          <LiLink text={t('header.home')} linkTo="/" action={ToogleModal} />
          <LiLink text={t('header.projects')} linkTo="projects/" action={ToogleModal} />
          <LiLink text={t('header.about')} linkTo="about/" action={ToogleModal} />
        </ul>
        <div className="w-full flex gap-12 items-center justify-center mt-6">
          <BtnActions />
        </div>
      </div>
    </div>
  )
}
