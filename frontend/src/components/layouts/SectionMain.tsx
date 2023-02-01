import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default function SectionMain({ children }: Props) {
  return <section className={`p-8`}>{children}</section>
}