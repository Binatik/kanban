import { IOpenDialogProps } from './../../../../features/openDialog/OpenDialog.props'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { v4 as uui } from 'uuid'
import { IDataTransfer } from '../../../../entities'

export interface IKanbanCard {
	id: string
	text: string
	name: 'card'
}

export interface IKanbanColumn {
	id: string
	title: string
	cards: IKanbanCard[]
	name: 'column'
}

export interface IKanbanState {
	colums: IKanbanColumn[]
	showDialog: boolean
	showDialogCard: boolean
	clickIndex: number
	value: string
	table: object
}

const initialState: IKanbanState = {
	colums: [],
	showDialog: false,
	showDialogCard: false,
	clickIndex: 0,
	value: '',
	table: {},
}

export const kanbanSlice = createSlice({
	name: 'kanban',
	initialState,
	reducers: {
		createColumn: (state): void => {
			if (state.value === '') {
				alert('Поле пустое')
				return
			}
			const column: IKanbanColumn = {
				id: uui().split('-')[0],
				title: state.value,
				cards: [],
				name: 'column',
			}
			state.colums.push(column)
			state.value = ''
		},

		createCard: (state): void => {
			if (state.value === '') {
				alert('Поле пустое')
				return
			}
			const cards: IKanbanCard = {
				id: uui().split('-')[0],
				text: state.value,
				name: 'card',
			}

			state.colums[state.clickIndex].cards.push(cards)
			state.value = ''
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

		closeDialogColumn: (state): void => {
			if (state.value.length > 0) {
				state.showDialog = false
			}
		},
		closeDialogCard: (state): void => {
			if (state.value.length > 0) {
				state.showDialogCard = false
			}
		},

		getValue: (state, action: PayloadAction<string>): void => {
			state.value = action.payload
		},

		moveKanban: (state, action: PayloadAction<IDataTransfer>): void => {
			const table = new Map()

			const flatCards = state.colums.flatMap((column) => column.cards)

			state.colums.forEach((column) => {
				if (column.id === action.payload.startID && column.name === 'column') {
					table.set('column/start', column)
				}

				if (column.id === action.payload.endID && column.name === 'column') {
					table.set('column/end', column)
				}
			})

			flatCards.forEach((card) => {
				console.log('test')
				if (card.id === action.payload.startID && card.name === 'card') {
					table.set('card/start', card)
				}

				if (card.id === action.payload.endID && card.name === 'card') {
					table.set('card/end', card)
				}
			})

			const columnStart = table.get('column/start')
			const columnEnd = table.get('column/end')

			const cardStart = table.get('card/start')
			const cardEnd = table.get('card/end')

			console.log(cardStart, cardEnd)

			const copyStateColumns = [...state.colums] // создаем копию массива

			const indexColumnStart = copyStateColumns.indexOf(columnStart)
			const indexColumnEnd = copyStateColumns.indexOf(columnEnd)

			copyStateColumns[indexColumnEnd] = columnStart
			copyStateColumns[indexColumnStart] = columnEnd

			const result = copyStateColumns.map((column) => {
				const copyStateCards = [...column.cards]
				const indexCardStart = copyStateCards.indexOf(cardStart)
				const indexCardEnd = copyStateCards.indexOf(cardEnd)
				copyStateCards[indexCardEnd] = cardStart
				copyStateCards[indexCardStart] = cardEnd
				return {
					...column,
					cards: copyStateCards.filter((card) => !!card),
				}
			})
			state.colums = result
		},

		updateKanban: (state) => {
			const json = localStorage.getItem('kanban')
			if (!json) return state
			const colums = JSON.parse(json) as IKanbanColumn[]
			return { ...state, colums }
		},
	},

	// extraReducers: (builder) => {
	// 	builder.addCase(saveKanbanColumnsReducer.pending, (state) => {
	// 		const json = localStorage.getItem('kanban')
	// 		if (!json) return state
	// 		const colums = JSON.parse(json) as IKanbanColumn[]
	// 		console.log(colums, 'ccc')

	// 		return { ...state, colums }
	// 	})
	// },
})

export const kanbanReducer = kanbanSlice.reducer
export const {
	createColumn,
	createCard,
	openDialog,
	closeDialog,
	closeDialogColumn,
	closeDialogCard,
	getValue,
	moveKanban,
	updateKanban,
} = kanbanSlice.actions
