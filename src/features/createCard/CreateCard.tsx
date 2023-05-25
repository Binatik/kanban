import { ButtonPrimary, Paragraph } from '../../entities'
import { useDispatch } from 'react-redux'
import { closeDialogCard, createCard } from '../../app/store/reducers/kanban/kanbanSlice'

function CreateCard() {
	const dispatch = useDispatch()

	function dialogOnClick() {
		dispatch(closeDialogCard())
		dispatch(createCard())
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
