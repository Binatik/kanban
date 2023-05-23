import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IOpenDialogProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	text: string
}
