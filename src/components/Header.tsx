import LinkTopicList from "./LinkTopicList"
import { SunIcon, MoonIcon } from "../assets/Icons"
import useThemeColor from "../hooks/useThemeColor"
import useLanguage from "../hooks/useLanguage";
import ImgFlag from "./ImgFlag";

export default function Header() {
  const [theme, handleChangeTheme] = useThemeColor()
  const { t, lang, setLanguage } = useLanguage()

  return (
    <header className="w-full flex items-center mb-12 justify-between px-4 py-6">
      <div>
        <h5 className="dark:text-white">Filipe Dev</h5>
        {/*hover que aparece os icones com links das minhas redes sociais e estilizar esse texto */}
      </div>
      <ul className="flex items-center justify-between gap-8">
        <LinkTopicList text={t('header.home')} linkPath="/" />
        <LinkTopicList text={t('header.projects')} linkPath="/projects" />
        <LinkTopicList text={t('header.about')} linkPath="/about" />
      </ul>
      <div className="flex items-center gap-4">
        <button onClick={handleChangeTheme} className="border-none outline-none relative cursor-pointer">
          {theme === 'light' ? <SunIcon /> : <MoonIcon className="dark:text-white" />}
        </button>
        <button onClick={setLanguage} className="border-none outline-none relative cursor-pointer">
          {lang === 'en' ? <ImgFlag lang="en" /> : <ImgFlag lang="pt" />}
        </button>
      </div>
    </header>
  )
}
