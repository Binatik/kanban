import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IPaperProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	appearance: 'primary' | 'secondary'
	size: 'sm' | 'md'
	children: ReactNode
	isDraggable?: boolean
}
