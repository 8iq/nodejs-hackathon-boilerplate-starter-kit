import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { cookies, headers } from 'next/headers'
import { initReactI18next } from 'react-i18next/initReactI18next'
import acceptLanguage from 'accept-language'

import {
  DEFAULT_LOCALE,
  DEFAULT_NAMESPACE,
  IS_I18N_DEBUG_ENABLED,
  LOCALE_COOKIE_NAME,
  LOCALES,
} from './config'

interface Importer {
  (
    language: string,
    namespace: string,
  ): Promise<string | boolean | null | undefined>
}

acceptLanguage.languages(LOCALES)

// based on: https://github.com/i18next/next-app-dir-i18next-example/blob/main/app/i18n/index.js#L6
const initI18next = async (
  importer: Importer,
  locale: string,
  options = {},
) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend(importer))
    .init({
      debug: IS_I18N_DEBUG_ENABLED,
      fallbackLng: DEFAULT_LOCALE,
      fallbackNS: DEFAULT_NAMESPACE,
      defaultNS: DEFAULT_NAMESPACE,
      ns: [DEFAULT_NAMESPACE],
      lng: locale,
      ...options,
    })
  return i18nInstance
}

/*
 You con use this function in `layout.tsx` and others server side React components
 */
export async function getLocale(): Promise<string> {
  const cookieStore = cookies()
  const headersStore = headers()

  // Cookie
  const cookieLocale = cookieStore.get(LOCALE_COOKIE_NAME)?.value
  if (cookieLocale && LOCALES.includes(cookieLocale)) return cookieLocale

  // Accept-Language header
  const headerLocale = acceptLanguage.get(headersStore.get('accept-language'))
  if (typeof headerLocale === 'string' && LOCALES.includes(headerLocale)) {
    return headerLocale
  }

  return DEFAULT_LOCALE
}

export async function getServerTranslate(importer: Importer, locale: string) {
  const i18nextInstance = await initI18next(importer, locale)
  return i18nextInstance.getFixedT(locale)
}

export { dir } from 'i18next'
