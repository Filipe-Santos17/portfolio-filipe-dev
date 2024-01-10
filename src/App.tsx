import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function App() {
  const { t, i18n } = useTranslation()

  const [lang, setLang] = useState(i18n.language)

  function setLanguage() {
    const language = lang === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(language)
    setLang(language)
  }

  return (
    <>
      <div className="text-3xl font-bold">{t('text')}</div>
      <button onClick={setLanguage}>change</button>
    </>
  )
}
