export default function ImgFlag({ lang }: { lang: 'en' | 'pt' }) {
  return (
    <img src={`src/assets/icon-${lang === 'en' ? 'eua' : 'bra'}.png`} alt="flag lang" className="w-8 h-8" />
  )
}
