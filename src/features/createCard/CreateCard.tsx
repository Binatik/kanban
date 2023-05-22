import { ButtonPrimary, Paragraph } from '../../entities'
import { useDispatch } from 'react-redux'
import { IKanbanCard, createCard } from '../../app/store/reducers/kanban/kanbanSlice'
import uniqid from 'uniqid'

const card: IKanbanCard = {
	id: uniqid(),
	text: 'Тестовый текст',
}

function CreateCard() {
	const dispatch = useDispatch()

	return (
		<ButtonPrimary onClick={() => dispatch(createCard(card))} appearance="primary">
			<Paragraph appearance="surface" size="md">
				Добавить еще одну карточку
			</Paragraph>
		</ButtonPrimary>
	)
}

export { CreateCard }
