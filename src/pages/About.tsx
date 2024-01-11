import { useEffect } from "react";
import Title from "../components/Title";
import useLanguage from "../hooks/useLanguage"

export default function About() {
  const { t } = useLanguage()

  useEffect(() =>{
    document.title = 'About - Filipe Dev'
  },[])

  return (
    <div>
      <Title text={`${t('about.title')}`} extraClass="mb-6" />
    </div>
  )
}
