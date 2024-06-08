'use server'

import { Show } from '@repo/ui/refine/antd'
import React from 'react'

import { Layout } from 'web/components/Layout'

export default async function DashboardPage(): Promise<React.JSX.Element> {
  return (
    <Layout>
      <Show headerButtons={[]}>
        <h1>Dashboard!</h1>
        <p>Content of your show page...</p>
      </Show>
    </Layout>
  )
}
