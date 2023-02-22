import { useRouter } from 'next/router'
import 'highlight.js/styles/github-dark.css'

import ScrollSyncToc from '@/components/post/ScrollSyncToc'
import { useTranslation } from 'next-i18next'
import Container from '@/components/common/atoms/Container'

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
      <Container>
        <div className="flex justify-center py-12 lg:gap-12">
          <div>
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <div className="py-8 lg:hidden">
              <ScrollSyncToc rawMarkdownBody={post.content} />
            </div>
            <div className="prose dark:prose-invert lg:prose-lg">
              <div dangerouslySetInnerHTML={{ __html: postHtml }} />
            </div>
          </div>
          <div className="relative hidden pt-24 lg:block">
            <ScrollSyncToc rawMarkdownBody={post.content} />
          </div>
        </div>
      </Container>
    </>
  )
}
