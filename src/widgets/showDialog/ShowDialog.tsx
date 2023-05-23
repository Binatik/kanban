import { Paper } from '../../entities'
import { IShowDialogProps } from './ShowDialog.props'
import styles from './ShowDialog.module.css'
import classNames from 'classnames'

function ShowDialog({ size, placeholder }: IShowDialogProps) {
	function resizeTexterea(event: React.KeyboardEvent<HTMLTextAreaElement>) {
		const textarea = event.currentTarget
		textarea.style.height = 'auto'
		textarea.style.height = `${textarea.scrollHeight}px`
	}

	return (
		<Paper appearance="secondary">
			<textarea
				onInput={resizeTexterea}
				rows={1}
				className={classNames(styles.dialog, {
					[styles.dialog_md]: size === 'md',
				})}
				placeholder={placeholder}
			/>
		</Paper>
	)
}

export { ShowDialog }
