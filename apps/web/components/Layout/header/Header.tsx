'use client'

import { useIsAuthenticated, useLink, useTranslate } from '@repo/ui/refine/core'
import React from 'react'

import { Layout, Space, theme } from '@repo/ui/general'
import { CurrentUser } from './CurrentUser'

const { useToken } = theme
const BaseHeader = Layout.Header

export const Header: React.FC = () => {
  const { token } = useToken()
  const Link = useLink()
  const { data: auth } = useIsAuthenticated()
  const isAuthenticated = auth?.authenticated
  const translate = useTranslate()
  const loginMessage = translate('buttons.login', 'Login')

  const headerStyles: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: `0px ${token.padding}px`,
    // position: 'sticky',
    // top: 0,
    // zIndex: 1,
  }

  return (
    // ThemedHeaderV2: https://github.com/refinedev/refine/blob/16eefc4/packages/antd/src/components/themedLayoutV2/header/index.tsx
    // Notifications: https://github.com/refinedev/refine/blob/79865af/examples/app-crm/src/components/layout/notifications.tsx
    <BaseHeader style={headerStyles}>
      <Space>
        {/*<Notifications/>*/}
        {isAuthenticated ? <CurrentUser /> : null}
        {!isAuthenticated ? <Link to={'login'}>{loginMessage}</Link> : null}
      </Space>
    </BaseHeader>
  )
}
