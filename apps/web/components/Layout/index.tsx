'use client'

import { ThemedLayoutV2 } from '@repo/ui/refine/antd'
import React from 'react'
import { BrandTitle } from '../BrandTitle'
import { Header } from './header'

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    // ThemedLayoutV2: https://refine.dev/docs/ui-integrations/ant-design/components/themed-layout/
    // Header: https://refine.dev/docs/ui-integrations/ant-design/components/themed-layout/#header
    <ThemedLayoutV2
      Header={() => <Header />}
      Title={({ collapsed }) => <BrandTitle collapsed={collapsed} />}
    >
      {children}
    </ThemedLayoutV2>
  )
}
