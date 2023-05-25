import { ButtonPrimary, Paragraph } from '../../entities'
import { useDispatch } from 'react-redux'
import { closeDialog, createColumn } from '../../app/store/reducers/kanban/kanbanSlice'

function CreateColumn() {
	const dispatch = useDispatch()

	function dialogOnClick() {
		dispatch(closeDialog())
		dispatch(createColumn())
	}

	return (
		<ButtonPrimary onClick={dialogOnClick} appearance="primary">
			<Paragraph appearance="surface" size="md">
				Добавить колонку
			</Paragraph>
		</ButtonPrimary>
	)
}

export { CreateColumn }
