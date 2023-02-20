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
import rehypeCodeTitles from 'rehype-code-titles'
import remarkSlug from 'remark-slug'
import remarkGfm from 'remark-gfm'
import remarkDirective from 'remark-directive'
import remarkExternalLinks from 'remark-external-links'
import 'highlight.js/styles/github-dark.css'

import { getAllPosts, getPostBySlug } from '@/utils/post'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import { getI18nProps } from '@/lib/getStatic'
import BlogContents from '@/components/post/BlogContents'
import BlogPageIndex from '@/components/post/BlogPageIndex'

const postDirPrefix = 'posts/blog/'

export default function Blog({
  post,
  postHtml,
  urls,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <BlogContents post={post} postHtml={postHtml} />
      <BlogPageIndex urls={urls} posts={posts} />
    </>
  )
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { params } = ctx
  if (params?.slug == null)
    return {
      props: {
        post: {
          title: '',
          category: '',
          thumbnail: '',
          content: '',
          date: '',
        },
      },
    }

  const post = getPostBySlug(
    typeof params.slug == 'string' ? [params.slug] : params.slug,
    ['title', 'category', 'thumbnail', 'content', 'date', 'id'],
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
    .use(rehypeCodeTitles)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(post.content as string)

  const slugs = getAllPosts(postDirPrefix).filter((post) => post[0] !== 'ja')
  const posts = slugs
    .map((slug) =>
      getPostBySlug(
        slug.filter((_, index) => index !== 0),
        ['title', 'category', 'thumbnail', 'date'],
        postDirPrefix,
        (ctx.params?.locale as string) ?? 'en'
      )
    )
    .reverse()
    .slice(0, 3)

  const urls = slugs
    .map((slug) => `/blog/${slug[1]}/${slug[2]}/${slug[3]}/${slug[4]}`)
    .reverse()
    .slice(0, 3)

  const slug = params.slug as string[]
  const pathname = `/blog/${slug.join('/')}`

  const seo = {
    pathname,
    title: {
      ja: post.title as string,
      en: post.title as string,
    },
    description: {
      ja: `${post.content.slice(0, 120)} ...`,
      en: `${post.content.slice(0, 120)} ...`,
    },
    img: post.thumbnail as string,
  }

  return {
    props: {
      urls,
      posts,
      post,
      postHtml: postHtml.value,
      ...(await getI18nProps(ctx, ['common', 'blog'], seo)),
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
