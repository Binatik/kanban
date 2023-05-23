import { useSelector } from 'react-redux'
import { RootState } from '../../app/store/store'
import { Paper, Paragraph } from '../../entities'
import styles from './KanbanList.module.css'
import classNames from 'classnames'
import { CreateColumn } from '../../features/createColumn/CreateColumn'

function KanbanList() {
	// const stateColums = useSelector((state: RootState) => state.kanbanReducer.colums)
	// console.log(stateColums)
	// return (
	// 	<div className={classNames(styles.kanban_list)}>
	// 		{stateColums.length === 0 ? (
	// 			<Paper size='md' className={classNames(styles.kanban_new)} appearance="primary">
	// 				<CreateColumn />
	// 			</Paper>
	// 		) : null}
	// 		{stateColums.map((column) => {
	// 			return (
	// 				<Paper size='md'
	// 					className={classNames(styles.kanban_paper)}
	// 					key={column.id}
	// 					appearance="primary">
	// 					<CreateColumn />
	// 					{column.cards.map((card) => (
	// 						<Paper
	// 							className={classNames(styles.kanban_item)}
	// 							key={card.id}
	// 							appearance="secondary">
	// 							<Paragraph appearance="primary" size="sm">
	// 								{card.text}
	// 							</Paragraph>
	// 						</Paper>
	// 					))}
	// 				</Paper>
	// 			)
	// 		})}
	// 	</div>
	// )
}

export { KanbanList }
