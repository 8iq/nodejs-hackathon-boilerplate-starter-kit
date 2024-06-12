'use client'

import { AuthPage } from '@repo/ui/refine/antd'
import React from 'react'

import { BrandTitle } from 'web/components/BrandTitle'

export default function UpdatePasswordPage(): React.JSX.Element {
  return (
    <AuthPage type="updatePassword" title={<BrandTitle collapsed={false} />} />
  )
}
