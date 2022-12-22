import clsx from 'clsx'
import { forwardRef } from 'react'

type OuterContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.Ref<HTMLDivElement>
}

const OuterContainer: React.ForwardRefExoticComponent<OuterContainerProps> =
  forwardRef(({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    )
  })

OuterContainer.displayName = 'OuterContainer'

type InnerContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.Ref<HTMLDivElement>
}

const InnerContainer: React.ForwardRefExoticComponent<InnerContainerProps> =
  forwardRef(({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    )
  })

InnerContainer.displayName = 'InnerContainer'

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  ref?: React.Ref<HTMLDivElement>
}

// @ts-expect-error - This is a workaround to allow for the `Container.Outer` and `Container.Inner` static properties.
export const Container: React.ForwardRefExoticComponent<ContainerProps> & {
  Outer: React.ForwardRefExoticComponent<OuterContainerProps>
  Inner: React.ForwardRefExoticComponent<InnerContainerProps>
} = forwardRef(({ children, ...props }, ref) => {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

Container.displayName = 'Container'

Container.Outer = OuterContainer
Container.Inner = InnerContainer

export default Container
