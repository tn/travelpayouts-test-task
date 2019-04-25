import * as React from 'react'
import localization from './utils/localization'
import en from './locales/en'
import ru from './locales/ru'

export const createLocalization = localization({ 'ru-RU': ru, 'en-US': en })
const LangContext = React.createContext(createLocalization)

export default LangContext
