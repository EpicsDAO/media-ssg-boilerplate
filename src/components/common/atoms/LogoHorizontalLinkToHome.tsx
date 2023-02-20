import Link from '@/components/routing/Link'
import Image from 'next/image'
import logoHorizontal from '@/assets/img/logo/Epics-logo-horizontal.svg'
import logoHorizontalWhite from '@/assets/img/logo/Epics-logo-horizontal-white.svg'
import clsx from 'clsx'

type Props = {
  className?: string
  onClick?: () => void
}

export default function LogoHorizontalLinkToHome({
  className,
  ...rest
}: Props) {
  return (
    <>
      <Link href="/" {...rest}>
        <span className="sr-only">Epics DAO</span>
        <Image
          src={logoHorizontal}
          alt="Epics DAO"
          className={clsx('dark:hidden ', className)}
        />
        <Image
          src={logoHorizontalWhite}
          alt="Epics DAO"
          className={clsx('hidden dark:block', className)}
        />
      </Link>
    </>
  )
}
