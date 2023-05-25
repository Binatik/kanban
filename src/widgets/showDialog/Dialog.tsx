import { Paper } from '../../entities'
import { IDialogProps } from './Dialog.props'
import styles from './Dialog.module.css'
import classNames from 'classnames'
import { CloseDialog } from '../../features/closeDialog/CloseDialog'
import { getValue } from '../../app/store/reducers/kanban/kanbanSlice'
import { useDispatch } from 'react-redux'
import { CreateCard, CreateColumn } from '../../features'

function Dialog({ size, command, className, placeholder }: IDialogProps) {
	const dispatch = useDispatch()

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
					onChange={(event) => dispatch(getValue(event.currentTarget.value))}
					rows={1}
					className={classNames(styles.dialog, {
						[styles.dialog_md]: size === 'md',
					})}
					placeholder={placeholder}
				/>
			</Paper>
			<div className={styles.dialog_bottom}>
				{command === 'createColumn' && <CreateColumn />}
				{command === 'createCard' && <CreateCard />}
				<CloseDialog />
			</div>
		</>
	)
}

export { Dialog }
