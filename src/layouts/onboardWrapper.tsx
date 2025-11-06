import type { ReactElement, ReactNode } from 'react'

type Props = {
  component: ReactNode
}

const OnboardWrapper = ({ component }: Props): ReactElement => {
  return <>{component}</>
}

export default OnboardWrapper
