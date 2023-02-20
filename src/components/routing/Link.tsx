import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

type Props = {
  children: ReactNode
  href: string
  className?: string
  skipLocaleHandling?: Boolean
  locale?: string
  onClick?: () => void
}

export default function LinkComponent({
  children,
  skipLocaleHandling,
  ...rest
}: Props) {
  const router = useRouter()
  const locale = rest.locale || router.query.locale || ''

  let href = rest.href || router.asPath
  if (href.indexOf('http') === 0) skipLocaleHandling = true
  if (locale && !skipLocaleHandling) {
    href = href
      ? `/${locale}${href}`
      : router.pathname.replace('[locale]', locale as string)
  }

  return (
    <>
      <Link href={href}>
        <span {...rest}>{children}</span>
      </Link>
    </>
  )
}
