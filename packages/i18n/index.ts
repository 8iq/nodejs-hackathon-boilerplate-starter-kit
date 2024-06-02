'use client'

import i18next from 'i18next'
import { useTranslation } from 'next-i18next'
import { initReactI18next } from 'react-i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

export * from './config'
export {
  useTranslation,
  i18next,
  initReactI18next,
  resourcesToBackend,
  LanguageDetector,
}
