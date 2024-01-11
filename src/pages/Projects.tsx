import { useEffect } from "react"
import apis from "../api"
import ApiFetch from "../utils/ApiFetch"
import ChildrenItemProject from "../components/ChildrenItemProject"
import { DataTypeGitHubApi } from "../types"
import Title from "../components/Title"
import Button from "../components/Button"
import useLanguage from "../hooks/useLanguage"

const LoadingComponent = () => (
  <div className="w-full animate-pulse">
    <div className="h-20 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-4"></div>
    <div className="h-20 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-4"></div>
    <div className="h-20 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-4"></div>
    <div className="h-20 bg-gray-200 rounded-md dark:bg-gray-700 w-full mb-4"></div>
  </div>
)

export default function Projects() {
  const { data, status, send } = ApiFetch()
  const dataContent: DataTypeGitHubApi[] = data
  const { t } = useLanguage()

  function goToGitHub() {
    window.open("https://github.com/Filipe-Santos17?tab=repositories")
  }

  useEffect(() => {
    send({
      route: apis.api_git_hub,
      method: "GET",
    })

    document.title = 'Projects - Filipe Dev'
  }, [send])

  return (
    <section>
      {!status.error ?
        <>
          <Title text={`${t('projects.title')}`} extraClass="mb-6" />
          {
            status.loading ?
              <LoadingComponent />
              :
              <div className="mb-20">
                {dataContent.map(i => (
                  <ChildrenItemProject data={i} key={i.id} />
                ))}
              </div>
          }
        </>
        :
        <div>
          <Title text="Erro na comunicação com a Api do GitHub, mas sem problemas, você pode ver meus projetos, basta clicar no bottão abaixo:" extraClass="text-center" />
          <div className="flex w-full items-center justify-center mt-8">
            <Button content="Click Me" handleClickButton={goToGitHub} />
          </div>
        </div>
      }
    </section>
  )
}