import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface IDialogProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	placeholder: string
	size?: 'md'
	component: JSX.Element
}
