import { ThemedTitleV2 } from '@repo/ui/refine/antd'
import React from 'react'
import { Logo } from './Logo'

export const BrandTitle: typeof ThemedTitleV2 = (props) => {
  return (
    // auth-page: https://refine.dev/docs/ui-integrations/ant-design/components/auth-page/#title
    // layout: https://refine.dev/docs/ui-integrations/ant-design/components/themed-layout/#title
    <ThemedTitleV2 icon={<Logo />} text="My Project" {...props} />
  )
}
