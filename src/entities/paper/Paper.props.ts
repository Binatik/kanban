import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IPaperProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	appearance: 'primary' | 'secondary'
	children: ReactNode
	isDraggable?: boolean
}
