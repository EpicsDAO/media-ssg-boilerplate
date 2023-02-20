import type { ReactElement } from 'react'
import DefaultLayout from '@/layouts/default/DefaultLayout'

import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import Link from '@/components/routing/Link'

const seo = {
  pathname: '/404',
  title: {
    ja: '404',
    en: '404',
  },
  description: {
    ja: 'ページが見つかりませんでした',
    en: 'Not found',
  },
  img: null,
}

const getStaticProps = makeStaticProps(['common'], seo)
export { getStaticPaths, getStaticProps }

export default function Custom404() {
  const { t } = useTranslation(['common'])
  return (
    <>
      404
      <Link href="/">{t('common:backToTop')}</Link>
    </>
  )
}

Custom404.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
