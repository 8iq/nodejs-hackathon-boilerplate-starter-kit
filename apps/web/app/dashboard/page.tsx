'use server'

import { Show } from '@repo/ui/refine/antd'

import { Layout } from 'web/components/Layout'
import { getTranslate } from 'web/providers/i18n/server'

export default async function DashboardPage(): Promise<React.JSX.Element> {
  const translate = await getTranslate()
  const titleMessage = translate('dashboard.title', 'Dashboard')
  return (
    <Layout>
      <Show headerButtons={[]} title={titleMessage}>
        <h1>{titleMessage}</h1>
      </Show>
    </Layout>
  )
}
