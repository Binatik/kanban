import { Paper } from '../../entities'
import { IDialogProps } from './Dialog.props'
import styles from './Dialog.module.css'
import classNames from 'classnames'

function Dialog({ size, placeholder }: IDialogProps) {
	function resizeTexterea(event: React.KeyboardEvent<HTMLTextAreaElement>) {
		const textarea = event.currentTarget
		textarea.style.height = 'auto'
		textarea.style.height = `${textarea.scrollHeight}px`
	}

	return (
		<Paper size="sm" className="filled" appearance="secondary">
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

export { Dialog }
