import type { ReactNode } from 'react'
import { useEffect, useCallback } from 'react'
import DocHeader from './DocHeader'
import CommonFooter from '@/layouts/common/CommonFooter'

import { useRouter } from 'next/router'
import DocMenu from './DocMenu'

type Props = {
  children: ReactNode
}

export default function DocLayout({ children }: Props) {
  const resetWindowScrollPosition = useCallback(() => window.scrollTo(0, 0), [])
  const router = useRouter()

  useEffect(() => {
    if (!router.asPath.includes('#')) {
      resetWindowScrollPosition()
    }
  }, [router.asPath, resetWindowScrollPosition])

  return (
    <>
      <div className="relative h-full w-full bg-yellow-50 dark:bg-gray-800">
        <DocHeader />
        <DocMenu />
        <div className="min-h-screen">{children}</div>
        <CommonFooter />
      </div>
    </>
  )
}
