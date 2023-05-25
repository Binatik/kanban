import { IOpenDialogProps } from './../../../../features/openDialog/OpenDialog.props'
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
	showDialog: boolean
	showDialogCard: boolean
	clickIndex: number
	value: string
}

const initialState: IKanbanState = {
	colums: [],
	showDialog: false,
	showDialogCard: false,
	clickIndex: 0,
	value: '',
}

export const kanbanSlice = createSlice({
	name: 'kanban',
	initialState,
	reducers: {
		createColumn: (state): void => {
			const column: IKanbanColumn = {
				id: uniqid(),
				title: state.value,
				cards: [],
			}
			state.colums.push(column)
		},

		createCard: (state): void => {
			const cards: IKanbanCard = {
				id: uniqid(),
				text: state.value,
			}

			state.colums[state.clickIndex].cards.push(cards)
		},

		openDialog: (state, action: PayloadAction<IOpenDialogProps>): void => {
			state.clickIndex = action.payload.index
			switch (action.payload.type) {
				case 'column':
					if (state.showDialog) alert('Вы уже пытаетесь добавить что-то')
					state.showDialog = true
					break
				case 'card':
					if (state.showDialogCard) alert('Вы уже пытаетесь добавить что-то')
					state.showDialogCard = true
					break
				default:
					break
			}
		},
		closeDialog: (state): void => {
			state.showDialog = false
			state.showDialogCard = false
		},

		getValue: (state, action: PayloadAction<string>): void => {
			state.value = action.payload
		},
	},
})

export const kanbanReducer = kanbanSlice.reducer
export const { createColumn, createCard, openDialog, closeDialog, getValue } = kanbanSlice.actions
