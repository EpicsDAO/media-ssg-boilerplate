import { useRouter } from 'next/router'
import 'highlight.js/styles/github-dark.css'

import ScrollSyncToc from '@/components/post/ScrollSyncToc'
import { useTranslation } from 'next-i18next'

type Props = {
  post: {
    title: string
    asPath: string
    description: string
    content: string
  }
  postHtml: string
}

export default function Contents({ post, postHtml }: Props) {
  const router = useRouter()

  const { t } = useTranslation()

  return (
    <>
      <div className="prose dark:prose-invert lg:prose-lg">
        <div dangerouslySetInnerHTML={{ __html: postHtml }} />
      </div>
    </>
  )
}
