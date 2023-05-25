import { ButtonPrimary, Paragraph } from '../../entities'
import { useDispatch } from 'react-redux'
import { closeDialogColumn, createColumn } from '../../app/store/reducers/kanban/kanbanSlice'

function CreateColumn() {
	const dispatch = useDispatch()

	function dialogOnClick() {
		dispatch(closeDialogColumn())
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
