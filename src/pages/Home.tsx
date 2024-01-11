import useLanguage from "../hooks/useLanguage"
import Title from "../components/Title"
import LinkTopicList from "../components/LinkTopicList"
import { useEffect } from "react"

export default function Home() {
  const { t } = useLanguage()

  useEffect(() =>{
    document.title = 'Filipe Dev'
  },[])

  return (
    <section className="flex flex-col-reverse w-full h-full items-center justify-between md:flex-row gap-8">
      <div className="max-w-[30rem] flex flex-col gap-4">
        <Title text={t('home.hello')} />
        <h3 className="text-base dark:text-white">{t('home.jobTitle')}</h3>
        <section className="">
          <h4 className="text-lg font-medium dark:text-white">{t('home.interest')}</h4>
          <ul className="ml-2 mb-8">
            <LinkTopicList text={t('home.interestList.one')} linkPath="/" />
            <LinkTopicList text={t('home.interestList.two')} linkPath="/" />
            <LinkTopicList text={t('home.interestList.three')} linkPath="projects/" />
            <LinkTopicList text={t('home.interestList.four')} linkPath="about/" />
          </ul>
        </section>
      </div>
      <div className="w-full h-full md:w-96 md:h-96">
        <img src="./profile-photo.jpeg" alt="profile photo" className="w-full h-full rounded-xl" />
      </div>
    </section>
  )
}
