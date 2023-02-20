import { useRouter } from 'next/router'
import 'highlight.js/styles/github-dark.css'
import { markdownToTxt } from 'markdown-to-txt'

import ScrollSyncToc from '@/components/post/ScrollSyncToc'
import { useTranslation } from 'next-i18next'

type Props = {
  post: {
    title: string
    asPath: string
    category: string
    thumbnail: string
    date: string
    content: string
  }
  postHtml: string
}

export default function BlogContents({ post, postHtml }: Props) {
  const { t } = useTranslation()

  return <>BlogContents</>
}
