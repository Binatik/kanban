import classNames from 'classnames'
import { IButtonProps } from './Button.props'
import styles from './Button.module.css'

function Button({ appearance, className, children, ...props }: IButtonProps) {
	return (
		<button
			{...props}
			tabIndex={1}
			className={classNames(className, styles.button, {
				[styles.button_primary]: appearance === 'primary',
			})}
			type="button">
			{children}
		</button>
	)
}

export { Button }
