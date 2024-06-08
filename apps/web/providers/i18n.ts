'use client'

import { i18next, initReactI18next, LanguageDetector, resourcesToBackend, LOCALE_COOKIE_NAME, DEFAULT_LOCALE, DEFAULT_NAMESPACE, LOCALES } from '@repo/i18n'

const runsOnServerSide = typeof window === 'undefined'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`../public/locales/${language}/${namespace}.json`),
    ),
  )
  .init({
    // debug: true,
    lng: undefined, // let detect the language on client side
    fallbackLng: DEFAULT_LOCALE,
    fallbackNS: DEFAULT_NAMESPACE,
    preload: runsOnServerSide ? LOCALES : [],
    detection: {
      order: ['navigator', 'cookie', 'htmlTag'],
      lookupCookie: LOCALE_COOKIE_NAME,
    },
  })
