'use client'

import { GithubOutlined, GoogleOutlined } from '@repo/ui/icons'
import { AuthPage } from '@repo/ui/refine/antd'
import { useLogin, useParsed, useTranslate } from '@repo/ui/refine/core'
import React, { useEffect } from 'react'

import { BrandTitle } from 'web/components/BrandTitle'

interface QueryProps {
  email?: string
  accessToken?: string
  refreshToken?: string
}

export default function LoginPage(): React.JSX.Element {
  const { params } = useParsed<QueryProps>()
  const { mutate } = useLogin()
  const translate = useTranslate()

  const emailFromSearchParams = params?.email
  const accessToken = params?.accessToken
  const refreshToken = params?.refreshToken

  const initialValues = emailFromSearchParams
    ? { email: emailFromSearchParams }
    : undefined

  useEffect(() => {
    if (accessToken && refreshToken) {
      mutate({
        accessToken,
        refreshToken,
      })
    }
  }, [accessToken, refreshToken])

  return (
    <AuthPage
      type="login"
      formProps={{ initialValues }}
      title={<BrandTitle collapsed={false} />}
      providers={[
        {
          name: 'google',
          label: translate('pages.login.google', 'Sign in with Google'),
          icon: (
            <GoogleOutlined
              style={{
                fontSize: 24,
                lineHeight: 0,
              }}
            />
          ),
        },
        {
          name: 'github',
          label: translate('pages.login.github', 'Sign in with GitHub'),
          icon: (
            <GithubOutlined
              style={{
                fontSize: 24,
                lineHeight: 0,
              }}
            />
          ),
        },
      ]}
    />
  )
}
