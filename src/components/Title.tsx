type TypeTitle = {
  text: string,
  extraClass?: string,
}

export default function Title({ text, extraClass = "" }: TypeTitle) {
  return (
    <h1 className={`text-3xl font-extrabold leading-tight tracking-tight dark:text-white md:text-4xl ${extraClass}`}>
      {text}
    </h1>
  )
}
