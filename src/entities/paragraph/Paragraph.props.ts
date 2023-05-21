import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IParagraphProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	appearance: 'primary' | 'secondary'
	size: 'sm'
	children: ReactNode
}
