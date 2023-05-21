import classNames from 'classnames'
import { IHeadingProps } from './Heading.props'
import styles from './Heading.module.css'

function Heading({ tag, size, appearance, children, className }: IHeadingProps) {
	switch (tag) {
		case 'h2':
			return (
				<h2
					className={classNames(className, styles.heading, {
						[styles.heading_sm]: size === 'sm',
						[styles.heading_primary]: appearance === 'primary',
						[styles.heading_secondary]: appearance === 'secondary',
					})}>
					{children}
				</h2>
			)
		default:
			return <></>
	}
}

export { Heading }
