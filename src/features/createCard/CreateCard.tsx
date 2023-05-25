import { ButtonPrimary, Paragraph } from '../../entities'
import { useDispatch } from 'react-redux'
import { closeDialog, createCard } from '../../app/store/reducers/kanban/kanbanSlice'

function CreateCard() {
	const dispatch = useDispatch()

	function dialogOnClick() {
		dispatch(closeDialog())
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
