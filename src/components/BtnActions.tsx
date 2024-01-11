import { SunIcon, MoonIcon } from "../assets/Icons"
import useThemeColor from "../hooks/useThemeColor"
import useLanguage from "../hooks/useLanguage";
import ImgFlag from "./ImgFlag";


export default function BtnActions() {
  const { lang, setLanguage } = useLanguage()
  const [theme, handleChangeTheme] = useThemeColor()

  return (
    <>
      <button onClick={handleChangeTheme} className="border-none outline-none relative cursor-pointer">
        {theme === 'light' ? <SunIcon /> : <MoonIcon className="dark:text-white" />}
      </button>
      <button onClick={setLanguage} className="border-none outline-none relative cursor-pointer">
        {lang === 'en' ? <ImgFlag lang="en" /> : <ImgFlag lang="pt" />}
      </button>
    </>
  )
}
