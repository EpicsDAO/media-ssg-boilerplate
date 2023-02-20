import type { ReactElement } from 'react'
import type {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
} from 'next'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remark2Rehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import remarkSlug from 'remark-slug'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import remarkExternalLinks from 'remark-external-links'
import 'highlight.js/styles/github-dark.css'

import { getAllPosts, getPostBySlug } from '@/utils/post'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import { getI18nProps } from '@/lib/getStatic'
import Contents from '@/components/post/Contents'

const postDirPrefix = 'posts/legal/'

export default function Legal({
  post,
  postHtml,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Contents post={post} postHtml={postHtml} />
    </>
  )
}

Legal.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx

  if (params?.slug == null)
    return {
      props: {
        post: {
          title: '',
          description: '',
          content: '',
        },
      },
    }

  const post = getPostBySlug(
    typeof params.slug == 'string' ? [params.slug] : params.slug,
    ['title', 'description', 'content', 'id'],
    postDirPrefix,
    (params.locale as string) ?? 'en'
  )

  const postHtml = await unified()
    .use(remarkParse)
    .use(remarkDirective)
    .use(remarkGfm)
    .use(remarkSlug)
    .use(remarkExternalLinks, {
      target: '_blank',
      rel: ['noopener noreferrer'],
    })
    .use(remark2Rehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(post.content as string)

  const seo = {
    pathname: `/legal/${post.id}`,
    title: {
      ja: post.title as string,
      en: post.title as string,
    },
    description: {
      ja: post.description as string,
      en: post.description as string,
    },
    img: null,
  }

  return {
    props: {
      post,
      postHtml: postHtml.value,
      ...(await getI18nProps(ctx, ['common'], seo)),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(postDirPrefix)
  return {
    paths: posts.map((post) => {
      if (post[0] === 'ja') {
        return {
          params: {
            slug: post.filter((_, index) => index !== 0),
            locale: 'ja',
          },
        }
      }
      return {
        params: {
          slug: post.filter((_, index) => index !== 0),
          locale: 'en',
        },
      }
    }),
    fallback: false,
  }
}
