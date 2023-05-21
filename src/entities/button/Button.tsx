import classNames from 'classnames'
import { IButtonProps } from './Button.props'
import { ReactComponent as Vector } from '../../app/assets/vector.svg'
import styles from './Button.module.css'

function Button({ appearance, className, children }: IButtonProps) {
	return (
		<button
			tabIndex={1}
			onClick={() => console.log('нажал')}
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
