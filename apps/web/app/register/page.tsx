'use client'

import { GithubOutlined, GoogleOutlined } from '@repo/ui/icons'
import { AuthPage } from '@repo/ui/refine/antd'
import { useParsed, useTranslate } from '@repo/ui/refine/core'
import React from 'react'

import { BrandTitle } from 'web/components/BrandTitle'

interface QueryProps {
  email?: string
}

export default function RegisterPage(): React.JSX.Element {
  const { params } = useParsed<QueryProps>()
  const translate = useTranslate()

  const emailFromSearchParams = params?.email

  const initialValues = emailFromSearchParams
    ? { email: emailFromSearchParams }
    : undefined

  return (
    <AuthPage
      type="register"
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
