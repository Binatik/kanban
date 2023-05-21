import classNames from 'classnames'
import { IButtonProps } from './Button.props'
import { ReactComponent as Vector } from '../../app/assets/vector.svg'
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
			<Vector className={styles.button_vector} />
			{children}
		</button>
	)
}

export { Button }
