import { closeDialog } from '../../app/store/reducers/kanban/kanbanSlice'
import { useDispatch } from 'react-redux'
import { ButtonClose } from '../../entities'

function CloseDialog() {
	const dispatch = useDispatch()
	return <ButtonClose appearance="primary" onClick={() => dispatch(closeDialog())} />
}

export { CloseDialog }
