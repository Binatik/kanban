import { ButtonPrimary, Paragraph } from '../../entities'
import { useDispatch } from 'react-redux'
import { createColumn } from '../../app/store/reducers/kanban/kanbanSlice'
import { IKanbanColumn } from '../../app/store/reducers/kanban/kanbanSlice'
import uniqid from 'uniqid'

const column: IKanbanColumn = {
	id: uniqid(),
	title: 'Дела на сегодня',
	isShowCreator: false,
	cards: [{ id: uniqid(), text: 'Добавить еще одну колонку' }],
}

function CreateColumn() {
	const dispatch = useDispatch()

	return (
		<ButtonPrimary onClick={() => dispatch(createColumn(column))} appearance="primary">
			<Paragraph appearance="surface" size="md">
				Добавить еще одну колонку
			</Paragraph>
		</ButtonPrimary>
	)
}

export { CreateColumn }
