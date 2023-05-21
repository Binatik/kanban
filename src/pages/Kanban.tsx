import { Heading, Paper, Paragraph } from '../entities'

function Kanban() {
	return (
		<main className="container_extra">
			<Paper appearance="primary">
				<Paragraph size="sm" appearance="secondary">
					Добавить еще одну колонку
				</Paragraph>
			</Paper>
		</main>
	)
}

export { Kanban }
