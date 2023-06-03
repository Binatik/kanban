import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../store'
export const saveDataReducer = createAsyncThunk<void, void>(
	'app/saveDataReducer',
	async (_, { getState }) => {
		const kanbanState = (getState() as RootState).kanbanReducer
		const kanban = kanbanState.colums

		localStorage.setItem('kanban', JSON.stringify(kanban))
		// localStorage.clear()
	}
)
