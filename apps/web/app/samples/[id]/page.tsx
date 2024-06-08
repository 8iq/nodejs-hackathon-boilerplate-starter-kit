'use server'

import { AntdInferencer } from '@repo/ui/refine/antd'
import React from 'react'

import { Layout } from 'web/components/Layout'

export default async function ShowPage (): Promise<React.JSX.Element> {
  return (
    <Layout>
      <AntdInferencer/>
    </Layout>
  )
}
