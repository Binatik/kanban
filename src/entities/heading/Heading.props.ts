import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IHeadingProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	tag: 'h2' | 'h3'
	appearance: 'primary' | 'secondary'
	size: 'sm'
	children: ReactNode
}
