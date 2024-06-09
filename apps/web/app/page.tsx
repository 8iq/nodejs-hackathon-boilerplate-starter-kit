'use server'

import { Layout } from '@repo/ui/general'
import Image from 'next/image'
import React from 'react'

import { BrandTitle, Logo } from '../components/BrandTitle'
import { FormExample } from '../components/FormExample'
import { getTranslate } from '../providers/i18n/server'
import styles from './page.module.css'

const LINKS = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    description: 'You con check our main B2B dashboard.',
  },
  {
    title: 'Samples',
    href: '/samples',
    description:
      'Auto generated interfaces based on provider schema. Infer refine feature',
  },
  {
    title: 'Login',
    href: '/login',
    description: 'Check Login, ForgotPassword and Registration page.',
  },
  {
    title: 'Repo',
    href: 'https://github.com/8iq/nodejs-hackathon-boilerplate-starter-kit',
    description: 'Check the source repo to find.',
  },
]

async function Head(): Promise<React.JSX.Element> {
  const translate = await getTranslate()

  return (
    <div className={styles.description}>
      <p>{translate('dashboard.title', 'Dash')}</p>
      <div>
        <BrandTitle collapsed={false} />
      </div>
    </div>
  )
}

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean
  conic?: boolean
  className?: string
}): React.JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    />
  )
}

function Hero(): React.JSX.Element {
  return (
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.logos}>
          <div className={styles.circles}>
            <Image
              alt=""
              height={614}
              src="circles.svg"
              width={614}
              style={{ pointerEvents: 'none' }}
            />
          </div>
          <div className={styles.logoGradientContainer}>
            <Gradient className={styles.logoGradient} conic small />
          </div>

          <div className={styles.logo}>
            <Logo width={65} height={65} />
          </div>
        </div>
        <Gradient className={styles.backgroundGradient} conic />
      </div>
    </div>
  )
}

function Card({
  className,
  title,
  children,
  href,
}: {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}): React.JSX.Element {
  return (
    <a className={className} href={href} rel="noopener noreferrer">
      <h2>
        {title} <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  )
}

function CardLinks(): React.JSX.Element {
  return (
    <div className={styles.grid}>
      {LINKS.map(({ title, href, description }) => (
        <Card className={styles.card} href={href} key={title} title={title}>
          {description}
        </Card>
      ))}
    </div>
  )
}

export default async function Page(): Promise<React.JSX.Element> {
  return (
    <Layout className={styles.main}>
      {/*<NavigateToResource/>*/}

      <Head />
      <Hero />
      <CardLinks />
      <FormExample />
    </Layout>
  )
}
