import { useMemo } from 'react'
import { useRecoilValue } from 'recoil'
import { useTranslation } from 'next-i18next'
import useI18nRouter from '@/hooks/useI18nRouter'

type Post = {
  title: string
  category: string
  thumbnail: string
  date: string
}

type Props = {
  posts: Post[]
  urls: string[]
}

export default function BlogPageIndex({ posts, urls }: Props) {
  const { routerPush } = useI18nRouter()
  const { t, i18n } = useTranslation()
  const isJapanese = useMemo(() => {
    return i18n.language === 'ja'
  }, [i18n])

  return <>Blog Page Index</>
}
