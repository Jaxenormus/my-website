import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { forwardRef } from 'react'

import { ChevronRightIcon } from './Icons'

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  ref?: React.Ref<HTMLDivElement>
}

// @ts-expect-error - This is a workaround to allow for the `Card.Link`, `Card.Title`, `Card.Description`, and `Card.Cta` static properties.
const Card: React.ForwardRefExoticComponent<CardProps> & {
  Link: React.FC<CardLinkProps>
  Title: React.FC<CardTitleProps>
  Description: React.FC<CardDescriptionProps>
  Cta: React.FC<CardCtaProps>
} = forwardRef(
  ({ as: Component = 'div', className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={clsx(className, 'group relative flex flex-col items-start')}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Card.displayName = 'Card'

type CardLinkProps = LinkProps & {
  children: React.ReactNode
  className?: string
}

Card.Link = (props: CardLinkProps) => {
  const { children, ...rest } = props
  return (
    <>
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...rest}>
        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

Card.Link.displayName = 'Card.Link'

type CardTitleProps = {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  href?: string
  children: React.ReactNode
}

Card.Title = (props: CardTitleProps) => {
  const { as: Component = 'h2', href, children } = props
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Title.displayName = 'Card.Title'

type CardDescriptionProps = {
  children: React.ReactNode
}

Card.Description = ({ children }: CardDescriptionProps) => {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  )
}

Card.Description.displayName = 'Card.Description'

type CardCtaProps = {
  children?: React.ReactNode
}

Card.Cta = ({ children }: CardCtaProps) => {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  )
}

Card.Cta.displayName = 'Card.Cta'

export default Card
