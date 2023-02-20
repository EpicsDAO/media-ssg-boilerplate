import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import type { ReactElement } from 'react'
import DefaultLayout from '@/layouts/default/DefaultLayout'
import { getStaticPaths } from '@/lib/getStatic'
import 'highlight.js/styles/github-dark.css'

import { getAllPosts, getPostBySlug } from '@/utils/post'
import { getI18nProps } from '@/lib/getStatic'
import BlogIndex from '@/components/post/BlogIndex'

const postDirPrefix = 'posts/blog/'

const seo = {
  pathname: '/blog',
  title: {
    ja: 'ブログ',
    en: 'Blog',
  },
  description: {
    ja: 'ブログ',
    en: 'Blog',
  },
  img: null,
}

export default function BlogIndexPage({
  urls,
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <BlogIndex urls={urls} posts={posts} />
    </>
  )
}

BlogIndexPage.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
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

  const urls = slugs
    .map((slug) => `/blog/${slug[1]}/${slug[2]}/${slug[3]}/${slug[4]}`)
    .reverse()

  return {
    props: {
      urls,
      posts,
      ...(await getI18nProps(ctx, ['common', 'blog'], seo)),
    },
  }
}

export { getStaticPaths }
