import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ILatestState {
	name: 'Вася' | 'Оля'
	type: 1 | 2 | 3 | -1
	value: number
}

const initialState: ILatestState = {
	name: 'Вася',
	type: 3,
	value: 0,
}

export const latestSlice = createSlice({
	name: 'latest',
	initialState,
	reducers: {
		log: (state, action: PayloadAction<number>) => {
			state.name
			state.value = action.payload

			console.log(state.value, state.name)
		},
	},
})

export const latestReducer = latestSlice.reducer
export const { log } = latestSlice.actions
