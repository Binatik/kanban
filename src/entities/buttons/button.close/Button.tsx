import classNames from 'classnames'
import { IButtonProps } from './Button.props'
import { ReactComponent as Close } from '../../../app/assets/close.svg'
import styles from './Button.module.css'

function Button({ appearance, className, ...props }: IButtonProps) {
	return (
		<button
			{...props}
			tabIndex={1}
			className={classNames(className, styles.button, {
				[styles.button_primary]: appearance === 'primary',
			})}
			type="button">
			<Close />
		</button>
	)
}

export { Button }
