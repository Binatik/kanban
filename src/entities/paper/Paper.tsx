import { IPaperProps } from './Paper.props'
import styles from './Paper.module.css'
import classNames from 'classnames'

function Paper({ appearance, children, className }: IPaperProps) {
	return (
		<div
			className={classNames(className, styles.paper, {
				[styles.paper_primary]: appearance === 'primary',
			})}>
			{children}
		</div>
	)
}

export { Paper }
