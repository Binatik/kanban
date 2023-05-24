import { ButtonPrimary, Paragraph } from '../../entities'
import { useDispatch } from 'react-redux'
import { closeDialog, createColumn } from '../../app/store/reducers/kanban/kanbanSlice'
import { IKanbanColumn } from '../../app/store/reducers/kanban/kanbanSlice'
import uniqid from 'uniqid'

const column: IKanbanColumn = {
	id: uniqid(),
	title: 'Дела на сегодня',
	cards: [],
}

function CreateColumn() {
	const dispatch = useDispatch()

	function dialogOnClick() {
		dispatch(closeDialog())
		dispatch(createColumn(column))
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
