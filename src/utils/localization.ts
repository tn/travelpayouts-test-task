const getBrowserLang = () => {
  return navigator.language || (navigator as any).userLanguage
}

export default function localization (locales: any) {
  const lang = getBrowserLang()

  return (locale: string) => {
    return locales[lang][locale]
  }
}
