'use client'

import { App, ConfigProvider, theme, ThemeConfig } from 'antd'
import React, { useState } from 'react'

// https://ant.design/components/app#sequence-with-configprovider
// https://ant.design/components/config-provider
// https://github.com/refinedev/refine/blob/master/examples/with-nextjs/src/contexts/color-mode/index.tsx#L27
export function ThemeProvider({
  children,
  defaultMode,
}: Readonly<{
  defaultMode?: string
  children: React.ReactNode
}>) {
  const [mode] = useState(defaultMode)

  const themeConfig: ThemeConfig = {
    algorithm: mode === 'light' ? theme.defaultAlgorithm : theme.darkAlgorithm,
    token: {
      // Seed Token
      colorPrimary: '#ff1e56',
      colorLink: mode === 'light' ? '#3f3c3c' : '#eee7e7',
      borderRadius: 2,
    },
  }

  return (
    <ConfigProvider theme={themeConfig}>
      <App>{children}</App>
    </ConfigProvider>
  )
}
