import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IDraggableProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	htmlID: string
	children: ReactNode
	dataType: 'column' | 'cards'
}
