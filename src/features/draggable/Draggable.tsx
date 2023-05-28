import React from 'react'
import { IDraggableProps } from './Draggable.props'
import { useDispatch, useSelector } from 'react-redux'
import { moveKanban } from '../../app/store/reducers/kanban/kanbanSlice'
import { RootState } from '../../app/store/store'

function Draggable({ children, htmlID }: IDraggableProps) {
	const dispatch = useDispatch()
	const table = useSelector((state: RootState) => state.kanbanReducer.table)
	console.log(table)

	function onDragStart(event: React.DragEvent<HTMLDivElement>) {
		event.dataTransfer.setData('id/start', event.currentTarget.id)
	}

	function onDragOver(event: React.DragEvent<HTMLDivElement>) {
		event.stopPropagation()
		event.preventDefault()
	}

	function onDragDrop(event: React.DragEvent<HTMLDivElement>) {
		const startID = event.dataTransfer.getData('id/start')
		const endID = event.currentTarget.id
		dispatch(moveKanban({ startID, endID }))

		// const card = state.colums.flatMap((column) => column.cards).find((item) => item.id === id)
		// console.log(card)
	}

	// function saveToLocalStorage() {
	// 	localStorage.setItem('kanbanData', JSON.stringify(state.colums))
	// }

	return (
		<div
			id={htmlID}
			draggable={true}
			onDragStart={onDragStart}
			onDragOver={onDragOver}
			onDrop={onDragDrop}>
			{children}
		</div>
	)
}

export { Draggable }
