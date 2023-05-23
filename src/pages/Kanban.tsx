import { ShowDialog } from '../widgets'
import { KanbanList } from '../widgets/kanbanList/KanbanList'

function Kanban() {
	return (
		<main className="container_extra">
			<KanbanList />
			<ShowDialog size="md" placeholder="Введите название"></ShowDialog>
		</main>
	)
}

export { Kanban }
