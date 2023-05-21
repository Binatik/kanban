import { configureStore } from '@reduxjs/toolkit'
import { kanbanReducer } from './reducers/kanban/kanbanSlice'

export const store = configureStore({
	reducer: {
		kanbanReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
