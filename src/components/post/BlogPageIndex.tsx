import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from '@/components/routing/Link'

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
  const { t } = useTranslation()

  return (
    <>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
              News
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post, index) => (
              <article
                key={`BlogIndex Article${post.title}`}
                className="group flex flex-col items-start justify-between hover:cursor-pointer"
              >
                <Link href={urls[index]}>
                  <div className="relative w-full">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width="640"
                      height="320"
                      className="aspect-[16/9] w-full rounded bg-yellow-100 object-cover group-hover:opacity-80 dark:bg-gray-800 sm:aspect-[2/1] lg:aspect-[3/2]"
                      unoptimized
                    />
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-8 flex items-center gap-x-4 text-xs">
                      <time
                        dateTime={post.date}
                        className="text-gray-500 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-500"
                      >
                        {post.date}
                      </time>
                      <span className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 group-hover:bg-gray-100 dark:bg-gray-500 dark:text-gray-50 dark:group-hover:bg-gray-700">
                        {post.category}
                      </span>
                    </div>
                    <div className="relative">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-gray-50 dark:group-hover:text-gray-300">
                        <a href={urls[index]}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
