'use client'

import {
  i18next,
  initReactI18next,
  LanguageDetector,
  resourcesToBackend,
  LOCALE_COOKIE_NAME,
  DEFAULT_LOCALE,
  DEFAULT_NAMESPACE,
  LOCALES,
  IS_I18N_DEBUG_ENABLED,
} from '@repo/i18n'

import { IMPORTER } from './importer'

const runsOnServerSide = typeof window === 'undefined'

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourcesToBackend(IMPORTER))
  .init({
    debug: IS_I18N_DEBUG_ENABLED,
    lng: undefined, // let detect the language on client side
    fallbackLng: DEFAULT_LOCALE,
    fallbackNS: DEFAULT_NAMESPACE,
    preload: runsOnServerSide ? LOCALES : [],
    detection: {
      order: ['navigator', 'cookie', 'htmlTag'],
      lookupCookie: LOCALE_COOKIE_NAME,
    },
  })
