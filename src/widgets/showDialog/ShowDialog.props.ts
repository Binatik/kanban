import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IShowDialogProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	placeholder: string
	size?: 'md'
}
