import { Link } from "react-router-dom"

type TypeLinkTopic = {
  text: string,
  linkPath: string,
  isBlank?: boolean,
}

export default function LinkTopicList({ text, linkPath, isBlank = false }: TypeLinkTopic) {
  return (
    <li>
      <Link to={linkPath} target={isBlank ? "_blank" : "_self"} className="border-none hover:underline dark:text-white">
        {text}
      </Link>
    </li>
  )
}
