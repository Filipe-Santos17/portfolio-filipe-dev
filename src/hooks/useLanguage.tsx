import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function useLanguage() {
  const { t, i18n } = useTranslation()

  const [lang, setLang] = useState(i18n.language)

  function setLanguage() {
    const currentLanguage = lang === 'en' ? 'pt' : 'en'
    i18n.changeLanguage(currentLanguage)
    setLang(currentLanguage)
  }

  return { t, lang, setLanguage }
}
