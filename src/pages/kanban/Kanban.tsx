import { useSelector } from 'react-redux'
import { Paper } from '../../entities'
import { RootState } from '../../app/store/store'
import { CreateColumn } from '../../features/createColumn/CreateColumn'
import { CreateCard, OpenDialog } from '../../features'
import classNames from 'classnames'
import styles from './Kanban.module.css'
import { Dialog } from '../../widgets'
import { IKanbanCard } from '../../app/store/reducers/kanban/kanbanSlice'

function Kanban() {
	const stateColums = useSelector((state: RootState) => state.kanbanReducer.colums)
	const showDialog = useSelector((state: RootState) => state.kanbanReducer.showDialog)
	console.log(stateColums.length)
	return (
		<main className="container_extra">
			<div className={styles.kanban_list}>
				{stateColums.length === 0 ? (
					<Paper size="md" className={classNames(styles.kanban_new)} appearance="primary">
						{showDialog ? (
							<Dialog placeholder="Введите название колонки" />
						) : (
							<OpenDialog text="Добавь первую колонку" />
						)}
					</Paper>
				) : null}
				{stateColums.map((column) => {
					return (
						<>
							<Paper
								size="md"
								className={classNames(styles.kanban_new)}
								appearance="primary">
								<OpenDialog text="Введите название колонки" />
							</Paper>
						</>
					)
				})}
			</div>
		</main>
	)
}

export { Kanban }
