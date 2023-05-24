import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IOpenDialogProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	index: number
	text: string
	type: 'card' | 'column'
}
