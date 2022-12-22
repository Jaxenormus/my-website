import clsx from 'clsx'
import { FC, ReactElement } from 'react'

type ProseProps = {
  children: React.ReactNode
  className?: string
}

export const Prose: FC<ProseProps> = ({
  children,
  className = '',
}): ReactElement => (
  <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>
)
