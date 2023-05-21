import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import uniqid from 'uniqid'

export interface IKanbanCard {
	id: string
	text: string
}

export interface IKanbanColumn {
	id: string
	title: string
	cards: IKanbanCard[]
}

export interface IKanbanState {
	colums: IKanbanColumn[]
}

const initialState: IKanbanState = {
	colums: [
		{
			id: uniqid(),
			title: 'Дела на сегодня',
			cards: [{ id: uniqid(), text: 'Добавить еще одну карточку' }],
		},
	],
}

export const kanbanSlice = createSlice({
	name: 'kanban',
	initialState,
	reducers: {
		createColumn: (state, action: PayloadAction<IKanbanColumn>) => {
			state.colums.push(action.payload)
		},
	},
})

export const kanbanReducer = kanbanSlice.reducer
export const { createColumn } = kanbanSlice.actions
