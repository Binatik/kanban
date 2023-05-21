import { Button, Heading, Paper, Paragraph } from '../entities'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../app/store/store'
import { createColumn } from '../app/store/reducers/kanban/kanbanSlice'
import uniqid from 'uniqid'

const column = {
	id: uniqid(),
	title: 'Дела на сегодня',
	cards: [{ id: uniqid(), text: 'Добавить еще одну колонку' }],
}

function Kanban() {
	const stateColums = useSelector((state: RootState) => state.kanbanReducer.colums)
	const dispatch = useDispatch()
	return (
		<main className="container_extra">
			<Paper appearance="primary">
				<Button onClick={() => dispatch(createColumn(column))} appearance="primary">
					<Paragraph appearance="secondary" size="sm">
						Добавить еще одну колонку
					</Paragraph>
				</Button>
				{stateColums.map((column) => {
					return (
						<div>
							{column.cards.map((card) => (
								<p key={card.id}>{card.text}</p>
							))}
						</div>
					)
				})}
			</Paper>
		</main>
	)
}

export { Kanban }
