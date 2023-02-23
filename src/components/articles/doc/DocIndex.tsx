import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from '@/components/routing/Link'
import type { DocIndex } from '@/types/article'

type Props = {}

export default function DocIndex({}: Props) {
  const { t } = useTranslation()

  return (
    <>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
              {t('doc:title')}
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t('doc:body')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
