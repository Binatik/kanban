import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IDialogProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
	placeholder: string
	size?: 'md'
	command: 'createColumn' | 'createCard'
}
