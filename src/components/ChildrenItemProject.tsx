import { Link } from "react-router-dom"
import { DataTypeGitHubApi } from "../types"

export default function ChildrenItemProject({ data }: { data: DataTypeGitHubApi }) {
  return (
    <Link className="flex items-start justify-between px-4 py-2 mb-2 -mx-4 space-x-4 transition-colors duration-100 ease-in-out rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" to={data.html_url} target="_blank">
      <div>
        <h2 className="text-xl font-bold leading-tight tracking-tight text-black dark:text-white">
          {data.name}
        </h2>
        <div className="inline-block space-x-4 text-gray-700 dark:text-gray-200">
          <span className="inline-block text-sm">
            <p>{data.description}</p>
          </span>
        </div>
      </div>
      <div className="flex-shrink-0">
        <span className="hidden text-sm text-gray-700 dark:text-gray-200 md:block">
          {data.language || '-----'}
        </span>
      </div>
    </Link>
  )
}