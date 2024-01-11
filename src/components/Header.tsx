import LinkTopicList from "./LinkTopicList"
import useLanguage from "../hooks/useLanguage";
import BtnActions from "./BtnActions";
import { TypeChangeModalState } from "../types";

export default function Header({ changeModal }: TypeChangeModalState) {
  const { t } = useLanguage()

  function openModal() {
    changeModal(true)
  }

  return (
    <header className="w-full flex items-center mb-12 justify-between px-4 py-6">
      <div>
        <h5 className="dark:text-white">Filipe Dev</h5>
        {/*hover que aparece os icones com links das minhas redes sociais e estilizar esse texto */}
      </div>
      <ul className="hidden items-center justify-between gap-8 md:flex">
        <LinkTopicList text={t('header.home')} linkPath="/" />
        <LinkTopicList text={t('header.projects')} linkPath="/projects" />
        <LinkTopicList text={t('header.about')} linkPath="/about" />
      </ul>
      <div className="hidden items-center gap-4 md:flex">
        <BtnActions />
      </div>
      <div>
        <button className="flex flex-col md:hidden gap-1 border-none outline-none" onClick={openModal}>
          <li className="w-6 h-[.12rem] outline-none bg-black dark:bg-white border-none rounded-4xl block"></li>
          <li className="w-6 h-[.12rem] outline-none bg-black dark:bg-white border-none rounded-4xl block"></li>
          <li className="w-6 h-[.12rem] outline-none bg-black dark:bg-white border-none rounded-4xl block"></li>
        </button>
      </div>
    </header>
  )
}
