import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IButtonProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'primary'
}
