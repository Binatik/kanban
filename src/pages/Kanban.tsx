import { Button, Heading, Paper, Paragraph } from '../entities'

function Kanban() {
	return (
		<main className="container_extra">
			<Paper appearance="primary">
				<Button appearance="primary">
					<Paragraph appearance="secondary" size="sm">
						Добавить еще одну колонку
					</Paragraph>
				</Button>
			</Paper>
		</main>
	)
}

export { Kanban }
