'use client'

import { DEFAULT_NAMESPACE, useTranslation } from '@repo/i18n'
import { ThemedRefine } from '@repo/ui/refine'
import { useNotificationProvider } from '@repo/ui/refine/antd'
import { I18nProvider, ResourceProps } from '@repo/ui/refine/core'
import { ReactNode } from 'react'

// initialize i18n
import '../providers/i18n'
import { authProvider } from '../providers/auth'
import { dataProvider } from '../providers/data'

const resources: ResourceProps[] = [
  {
    name: 'dashboard',
    list: '/dashboard',
  },
  {
    name: 'samples',
    list: '/samples',
    show: '/samples/:id',
    create: '/samples/create',
    edit: '/samples/:id/edit',
    clone: '/samples/:id/clone',
    meta: {
      canDelete: true,
    },
  },
]

export function Providers({
  children,
  locale,
  theme,
}: {
  children?: ReactNode
  locale: string
  theme: 'dark' | 'light'
}) {
  const { t, i18n } = useTranslation(DEFAULT_NAMESPACE, { lng: locale })
  const i18nProvider: I18nProvider = {
    translate: (key: string, options?: any) => t(key, options) as string,
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  }

  return (
    <ThemedRefine
      theme={theme}
      dataProvider={dataProvider}
      authProvider={authProvider}
      notificationProvider={useNotificationProvider}
      i18nProvider={i18nProvider}
      resources={resources}
    >
      {children}
    </ThemedRefine>
  )
}
