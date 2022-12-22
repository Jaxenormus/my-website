import Link, { LinkProps } from 'next/link'
import { ReactElement } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SocialLinkProps = { icon: (props: any) => ReactElement } & LinkProps

const SocialLink: React.FC<SocialLinkProps> = ({ icon: Icon, ...props }) => {
  return (
    <Link className="group -m-1 p-1" target="_blank" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export default SocialLink
