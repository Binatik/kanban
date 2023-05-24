import { IOpenDialogProps } from './../../../../features/openDialog/OpenDialog.props'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

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
	showDialog: boolean
	showDialogCard: boolean
}

const initialState: IKanbanState = {
	colums: [],
	showDialog: false,
	showDialogCard: false,
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
		openDialog: (state, action: PayloadAction<IOpenDialogProps['type']>) => {
			switch (action.payload) {
				case 'column':
					if (state.showDialog) alert('Вы уже пытаетесь добавить что-то')
					state.showDialog = true
					break
				case 'card':
					if (state.showDialog) alert('Вы уже пытаетесь добавить что-то')
					state.showDialogCard = true
					break
			}
		},
		closeDialog: (state) => {
			state.showDialog = false
			state.showDialogCard = false
		},
	},
})

export const kanbanReducer = kanbanSlice.reducer
export const { createColumn, createCard, openDialog, closeDialog } = kanbanSlice.actions
