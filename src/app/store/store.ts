import { configureStore } from '@reduxjs/toolkit'
import { latestReducer } from './reducers/latest/latestSlice'

export const store = configureStore({
	reducer: {
		latestReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
