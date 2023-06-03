import { useSelector } from 'react-redux'
import { RootState, store } from './store/store'
import { useEffect } from 'react'
import { Kanban } from '../pages/kanban/Kanban'

import { saveDataReducer } from './store/reducers/kanban/appSlice'
import { updateKanban } from './store/reducers/kanban/kanbanSlice'

function App() {
	const state = {
		colums: useSelector((state: RootState) => state.kanbanReducer.colums),
	}

	console.log(state)

	useEffect(() => {
		store.dispatch(updateKanban())
	}, [])

	useEffect(() => {
		store.dispatch(saveDataReducer())
	})
	return <Kanban />
}

export default App
