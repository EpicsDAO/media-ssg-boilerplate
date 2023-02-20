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

export default function BlogIndex({ posts, urls }: Props) {
  const { routerPush } = useI18nRouter()

  const { t } = useTranslation()

  return <>Blog Index</>
}
