import { ButtonSecondary, Paragraph } from '../../entities'
import { openDialog } from '../../app/store/reducers/kanban/kanbanSlice'
import { IOpenDialogProps } from './OpenDialog.props'
import { useDispatch } from 'react-redux'

function OpenDialog({ text, index, type }: IOpenDialogProps) {
	const dispatch = useDispatch()
	return (
		<ButtonSecondary
			onClick={() => dispatch(openDialog({ type, index, text }))}
			appearance="primary">
			<Paragraph appearance="secondary" size="sm">
				{text}
			</Paragraph>
		</ButtonSecondary>
	)
}

export { OpenDialog }
