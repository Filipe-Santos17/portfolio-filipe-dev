type TypeTitle = {
  text: string,
  extraClass?: string,
}

export default function Title({ text, extraClass = "" }: TypeTitle) {
  return (
    <h1 className={`text-4xl font-extrabold leading-tight tracking-tight dark:text-white ${extraClass}`}>
      {text}
    </h1>
  )
}
