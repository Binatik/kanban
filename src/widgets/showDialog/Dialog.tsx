import { Paper } from '../../entities'
import { IDialogProps } from './Dialog.props'
import styles from './Dialog.module.css'
import classNames from 'classnames'
import { CloseDialog } from '../../features/closeDialog/CloseDialog'

function Dialog({ size, component, className, placeholder }: IDialogProps) {
	function resizeTexterea(event: React.KeyboardEvent<HTMLTextAreaElement>) {
		const textarea = event.currentTarget
		textarea.style.height = 'auto'
		textarea.style.height = `${textarea.scrollHeight}px`
	}

	return (
		<>
			<Paper
				className={classNames(styles.dialog_top, className)}
				size="sm"
				appearance="secondary">
				<textarea
					onInput={resizeTexterea}
					rows={1}
					className={classNames(styles.dialog, {
						[styles.dialog_md]: size === 'md',
					})}
					placeholder={placeholder}
				/>
			</Paper>
			<div className={styles.dialog_bottom}>
				{component}
				<CloseDialog />
			</div>
		</>
	)
}

export { Dialog }
