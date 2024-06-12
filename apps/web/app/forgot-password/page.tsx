'use client'

import { AuthPage } from '@repo/ui/refine/antd'
import { useParsed } from '@repo/ui/refine/core'
import React from 'react'

import { BrandTitle } from 'web/components/BrandTitle'

interface QueryProps {
  email?: string
}

export default function ForgotPasswordPage(): React.JSX.Element {
  const { params } = useParsed<QueryProps>()

  const emailFromSearchParams = params?.email

  const initialValues = emailFromSearchParams
    ? { email: emailFromSearchParams }
    : undefined

  return (
    <AuthPage
      type="forgotPassword"
      formProps={{ initialValues }}
      title={<BrandTitle collapsed={false} />}
    />
  )
}
