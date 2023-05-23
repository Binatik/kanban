import { IPaperProps } from './Paper.props'
import styles from './Paper.module.css'
import classNames from 'classnames'

function Paper({ appearance, size, children, className }: IPaperProps) {
	return (
		<div
			className={classNames(className, styles.paper, {
				[styles.paper_primary]: appearance === 'primary',
				[styles.paper_secondary]: appearance === 'secondary',
				[styles.paper_sm]: size === 'sm',
				[styles.paper_md]: size === 'md',
			})}>
			{children}
		</div>
	)
}

export { Paper }
