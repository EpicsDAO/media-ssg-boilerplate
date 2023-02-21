import Container from '@/components/common/atoms/Container'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import nextjsLogo from '@/assets/img/logo/projects/nextjs.svg'
import i18nextLogo from '@/assets/img/logo/projects/i18next.webp'
import recoilLogo from '@/assets/img/logo/projects/recoil.svg'
import eslintLogo from '@/assets/img/logo/projects/eslint.svg'
import prettierLogo from '@/assets/img/logo/projects/prettier.png'
import reactLogo from '@/assets/img/logo/projects/react.svg'
import tailwindcssLogo from '@/assets/img/logo/projects/tailwindcss.svg'
import typescriptLogo from '@/assets/img/logo/projects/typescript.svg'
import { Button } from '@/components/common/atoms/Button'
import clsx from 'clsx'

export default function HomeHeroRow() {
  const { t } = useTranslation()

  return (
    <>
      <Container className="pt-24 pb-20 text-center lg:pt-40">
        <h1 className="font-display mx-auto max-w-4xl text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-7xl">
          Media SSG Boilerplate<span className="text-red-500">.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-700 dark:text-gray-200">
          {t('home:HeroRow.body')}
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Button href="/doc" className="rounded-full">
            {t('common:navs.defaultMainNav.doc')}
          </Button>
          <Button
            href="https://github.com/EpicsDAO/media-ssg-boilerplate"
            variant="outline"
            className="rounded-full"
          >
            GitHub
          </Button>
        </div>
        <div className="mt-36 lg:mt-48">
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
          >
            {[
              [
                {
                  name: 'Next.js',
                  logo: nextjsLogo,
                  link: 'https://nextjs.org/',
                },
                {
                  name: 'React',
                  logo: reactLogo,
                  link: 'https://reactjs.org/',
                },
                {
                  name: 'TypeScript',
                  logo: typescriptLogo,
                  link: 'https://www.typescriptlang.org/',
                },
                {
                  name: 'Tailwind',
                  logo: tailwindcssLogo,
                  link: 'https://tailwindcss.com/',
                },
              ],
              [
                {
                  name: 'ESLint',
                  logo: eslintLogo,
                  link: 'https://eslint.org/',
                },
                {
                  name: 'Prettier',
                  logo: prettierLogo,
                  link: 'https://prettier.io/',
                },
                {
                  name: 'Recoil',
                  logo: recoilLogo,
                  link: 'https://recoiljs.org/',
                },
                {
                  name: 'i18next',
                  logo: i18nextLogo,
                  link: 'https://www.i18next.com/',
                },
              ],
            ].map((group, groupIndex) => (
              <li key={`HeroRowLogoCloudList${groupIndex}`}>
                <ul
                  role="list"
                  className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
                >
                  {group.map((project) => (
                    <li key={project.name} className="flex">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        <Image
                          src={project.logo}
                          alt={project.name}
                          className={clsx(
                            'grayscale hover:opacity-60',
                            project.name === 'React'
                              ? 'invert dark:invert-0'
                              : 'dark:invert'
                          )}
                          width={168}
                          height={48}
                          unoptimized
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}
