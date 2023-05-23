import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ICloseDialogProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	text?: string
}
