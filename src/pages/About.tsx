import { useEffect } from "react";
import useLanguage from "../hooks/useLanguage"
import LinkTopicList from "../components/LinkTopicList";

const SimplePText = ({ text }: { text: string }) => (
  <p className="dark:text-white mb-4 text-left md:text-justify" key={text}>{text}</p>
)

const SimpleTittle = ({ text }: { text: string }) => (
  <h2 className="text-3xl font-bold dark:text-white mt-8 mb-4 text-center md:text-left">{text}</h2>
)

export default function About() {
  const { t } = useLanguage()

  useEffect(() => {
    document.title = 'About - Filipe Dev'
  }, [])

  return (
    <div className="max-w-[70%] mx-auto mb-24">
      <section className="mb-12" id="about">
        <SimpleTittle text={t('about.title')} />
        <hgroup>
          <SimplePText text={t('about.text.one')} />
          <SimplePText text={t('about.text.two')} />
        </hgroup>
      </section>
      <section>
        <SimpleTittle text={t('about.hire')} />
        <p className="text-black dark:text-white mb-4">{t('about.letsWork')}</p>
        <ul className="list-disc text-black dark:text-white ml-8">
          <li>{t('about.listTopics.one')}</li>
          <li>{t('about.listTopics.two')}</li>
          <li>{t('about.listTopics.three')}</li>
          <li>{t('about.listTopics.four')}</li>
          <li>{t('about.listTopics.five')}</li>
          <li>{t('about.listTopics.six')}</li>
          <li>{t('about.listTopics.seven')}</li>
          <li>{t('about.listTopics.eight')}</li>
          <li>{t('about.listTopics.none')}</li>
        </ul>
      </section>
      <section>
        <SimpleTittle text={t('about.contact')} />
        <ul className="list-disc text-black dark:text-white ml-0 md:ml-8">
          <LinkTopicList text="Linkedin" linkPath="https://www.linkedin.com/in/filipemarquesdeveloper/" isBlank />
          <LinkTopicList text="WhatsApp" linkPath="/" />
          <LinkTopicList text="Gmail" linkPath="/" />
          <LinkTopicList text="Instagram" linkPath="https://www.instagram.com/filipe_devjs/" isBlank />
        </ul>
      </section>
    </div>
  )
}
