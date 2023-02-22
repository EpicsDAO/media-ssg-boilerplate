import 'highlight.js/styles/github-dark.css'
import Container from '@/components/common/atoms/Container'
import ScrollSyncToc from '@/components/post/ScrollSyncToc'
import Image from 'next/image'

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
  return (
    <>
      <Container>
        <div className="flex justify-center py-12 lg:gap-12">
          <div>
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="mt-1 text-gray-600 dark:text-gray-200">{post.date}</p>
            <div className="py-8">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width="16"
                height="9"
                className="aspect-[16/9] w-full rounded bg-gray-100 object-cover group-hover:opacity-80 sm:aspect-[2/1] lg:aspect-[3/2]"
                unoptimized
              />
            </div>
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
