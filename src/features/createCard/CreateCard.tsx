import { ButtonPrimary, Paragraph } from '../../entities'
import { useDispatch } from 'react-redux'
import { IKanbanCard, closeDialog, createCard } from '../../app/store/reducers/kanban/kanbanSlice'
import uniqid from 'uniqid'

const card: IKanbanCard = {
	id: uniqid(),
	text: 'Тестовый текст',
}

function CreateCard() {
	const dispatch = useDispatch()

	function dialogOnClick() {
		dispatch(closeDialog())
		dispatch(createCard(card))
	}

	return (
		<ButtonPrimary onClick={dialogOnClick} appearance="primary">
			<Paragraph appearance="surface" size="md">
				Добавить карточку
			</Paragraph>
		</ButtonPrimary>
	)
}

export { CreateCard }
