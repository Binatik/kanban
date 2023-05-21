import { Heading, Paper, Paragraph } from '../entities'

function Kanban() {
	return (
		<Paper appearance="primary">
			<Heading tag="h2" size="sm" appearance="primary">
				Заголовок
			</Heading>
			<Paragraph size="sm" appearance="primary">
				Текст скелета
			</Paragraph>
		</Paper>
	)
}

export { Kanban }
