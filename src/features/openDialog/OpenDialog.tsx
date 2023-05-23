import { ButtonSecondary, Paragraph } from '../../entities'
import { openDialog } from '../../app/store/reducers/kanban/kanbanSlice'
import { IOpenDialogProps } from './OpenDialog.props'
import { useDispatch } from 'react-redux'

function OpenDialog({ text }: IOpenDialogProps) {
	const dispatch = useDispatch()
	return (
		<ButtonSecondary onClick={() => dispatch(openDialog())} appearance="primary">
			<Paragraph appearance="secondary" size="sm">
				{text}
			</Paragraph>
		</ButtonSecondary>
	)
}

export { OpenDialog }
