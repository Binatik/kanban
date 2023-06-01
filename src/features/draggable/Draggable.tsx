import React from 'react'
import { IDraggableProps } from './Draggable.props'
import { useDispatch, useSelector } from 'react-redux'
import { moveKanban } from '../../app/store/reducers/kanban/kanbanSlice'
import { RootState } from '../../app/store/store'
import style from './Draggable.module.css'

function Draggable({ children, htmlID, dataType }: IDraggableProps) {
	const dispatch = useDispatch()
	const table = useSelector((state: RootState) => state.kanbanReducer.table)
	console.log(table)

	function onDragStart(event: React.DragEvent<HTMLDivElement>) {
		event.stopPropagation()
		const target = event.target
		const element = (target as HTMLElement).closest('[data-type]') as HTMLElement
		if (!element) return

		const currentType = element.dataset.type as IDraggableProps['dataType']
		event.dataTransfer.setData('type/start', currentType)
		event.dataTransfer.setData('id/start', element.id)
	}

	function onDragOver(event: React.DragEvent<HTMLDivElement>) {
		event.stopPropagation()
		event.preventDefault()
	}

	function onDragDrop(event: React.DragEvent<HTMLDivElement>) {
		event.stopPropagation()
		const target = event.target
		const element = (target as HTMLElement).closest('[data-type]') as HTMLElement
		if (!element) return

		const currentType = element.dataset.type as IDraggableProps['dataType']

		const startType = event.dataTransfer.getData('type/start') as IDraggableProps['dataType']

		console.log(currentType, startType)
		if (!(currentType === startType)) {
			console.log('Вы пытаетесь перенести ' + currentType + ' в ' + startType)
			return
		}

		const startID = event.dataTransfer.getData('id/start')
		const end = (target as HTMLElement).closest('[draggable="true"]') as HTMLElement

		if (!end.id) console.log('END - Нет ID')
		const endID = end.id
		dispatch(moveKanban({ startID, endID }))
	}

	// function saveToLocalStorage() {
	// 	localStorage.setItem('kanbanData', JSON.stringify(state.colums))
	// }

	return (
		<div
			id={htmlID}
			data-type={dataType}
			draggable={true}
			onDragStart={onDragStart}
			onDragOver={onDragOver}
			onDrop={onDragDrop}
			className={style.draggable}>
			{children}
		</div>
	)
}

export { Draggable }
