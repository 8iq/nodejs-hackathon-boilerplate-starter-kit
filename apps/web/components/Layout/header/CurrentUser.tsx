'use client'

import { Button, Popover, Typography } from '@repo/ui/general'
import { LogoutOutlined } from '@repo/ui/icons'
import { useGetIdentity, useLogout } from '@repo/ui/refine/core'
import React from 'react'

import { CustomAvatar } from './CustomAvatar'

const Text = Typography.Text

export const CurrentUser: React.FC = () => {
  // const [opened, setOpened] = useState(false)
  const { data: user } = useGetIdentity<any>()
  const { mutate: logout } = useLogout()
  const name = user?.name || user?.email || 'NoName'
  const avatarUrl = user?.avatarUrl

  const popoverMenu = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Text
        strong
        style={{
          padding: '12px 20px',
        }}
      >
        {name}
      </Text>
      <div
        style={{
          borderTop: '1px solid #d9d9d9',
          padding: '4px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        {/*<Button*/}
        {/*  style={{ textAlign: 'left' }}*/}
        {/*  icon={<SettingOutlined/>}*/}
        {/*  type="text"*/}
        {/*  block*/}
        {/*  onClick={() => setOpened(true)}*/}
        {/*>*/}
        {/*  Account settings*/}
        {/*</Button>*/}
        <Button
          style={{ textAlign: 'left' }}
          icon={<LogoutOutlined />}
          type="text"
          danger
          block
          onClick={() => logout()}
        >
          Logout
        </Button>
      </div>
    </div>
  )

  const popover = (
    <Popover
      placement="bottomRight"
      content={popoverMenu}
      trigger="click"
      overlayInnerStyle={{ padding: 0 }}
      overlayStyle={{ zIndex: 999 }}
    >
      <CustomAvatar
        name={name}
        src={avatarUrl}
        size="default"
        style={{ cursor: 'pointer' }}
      />
    </Popover>
  )

  return (
    <>
      {popover}
      {/* AccountSettings: https://github.com/refinedev/refine/blob/79865af/examples/app-crm/src/components/layout/account-settings/index.tsx */}
      {/*{user && (*/}
      {/*  <AccountSettings*/}
      {/*    opened={opened}*/}
      {/*    setOpened={setOpened}*/}
      {/*    userId={user.id}*/}
      {/*  />*/}
      {/*)}*/}
    </>
  )
}
