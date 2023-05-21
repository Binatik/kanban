import classNames from 'classnames'
import { IParagraphProps } from './Paragraph.props'
import styles from './Paragraph.module.css'

function Paragraph({ appearance, size, children, className }: IParagraphProps) {
	return (
		<p
			className={classNames(className, styles.paragraph, {
				[styles.paragraph_sm]: size === 'sm',
				[styles.paragraph_primary]: appearance === 'primary',
				[styles.paragraph_secondary]: appearance === 'secondary',
			})}>
			{children}
		</p>
	)
}

export { Paragraph }
