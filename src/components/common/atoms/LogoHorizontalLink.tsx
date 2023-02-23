import Link from '@/components/routing/Link'
import Image from 'next/image'
import logoHorizontal from '@/assets/img/logo/Epics-logo-horizontal.svg'
import logoHorizontalWhite from '@/assets/img/logo/Epics-logo-horizontal-white.svg'
import clsx from 'clsx'

type Props = {
  className?: string
  href?: string
  onClick?: () => void
}

export default function LogoHorizontalLink({
  className,
  href = '/',
  ...rest
}: Props) {
  return (
    <>
      <Link href={href} {...rest}>
        <span className="sr-only">Epics DAO</span>
        <Image
          src={logoHorizontal}
          alt="Epics DAO"
          className={clsx('dark:hidden ', className)}
          unoptimized
        />
        <Image
          src={logoHorizontalWhite}
          alt="Epics DAO"
          className={clsx('hidden dark:block', className)}
          unoptimized
        />
      </Link>
    </>
  )
}
