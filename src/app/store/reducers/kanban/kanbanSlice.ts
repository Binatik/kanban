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
	isShowCreator: boolean
}

export interface IKanbanState {
	colums: IKanbanColumn[]
	showDialog: boolean
}

const initialState: IKanbanState = {
	colums: [],
	showDialog: false,
}

export const kanbanSlice = createSlice({
	name: 'kanban',
	initialState,
	reducers: {
		createColumn: (state, action: PayloadAction<IKanbanColumn>) => {
			state.colums.push(action.payload)
		},

		createCard: (state, action: PayloadAction<IKanbanCard>) => {
			state.colums.map((column) => column.cards.push(action.payload))
		},
		openDialog: (state) => {
			state.showDialog = true
		},
		closeDialog: (state) => {
			state.showDialog = false
		},
	},
})

export const kanbanReducer = kanbanSlice.reducer
export const { createColumn, createCard, openDialog, closeDialog } = kanbanSlice.actions
