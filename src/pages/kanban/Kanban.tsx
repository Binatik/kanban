import { useSelector } from 'react-redux'
import { Heading, Paper, Paragraph } from '../../entities'
import { RootState } from '../../app/store/store'
import { CreateColumn } from '../../features/createColumn/CreateColumn'
import { CreateCard, OpenDialog } from '../../features'
import classNames from 'classnames'
import styles from './Kanban.module.css'
import { Dialog } from '../../widgets'

function Kanban() {
	const stateColums = useSelector((state: RootState) => state.kanbanReducer.colums)
	const showDialog = useSelector((state: RootState) => state.kanbanReducer.showDialog)
	const showDialogCard = useSelector((state: RootState) => state.kanbanReducer.showDialogCard)

	console.log(stateColums)

	return (
		<main className="container_extra">
			<div className={styles.kanban_list}>
				{/* //Структура канбана */}
				{stateColums.map((column, index: number) => (
					<Paper
						className={classNames(styles.kanban_column)}
						key={column.id}
						size="md"
						appearance="primary">
						<Heading
							className={classNames(styles.kanban_title)}
							size="sm"
							tag="h2"
							appearance="primary">
							{column.title}
						</Heading>

						{column.cards.map((card) => (
							<>
								<Paper
									className={classNames(styles.kanban_item)}
									key={card.id}
									size="sm"
									appearance="secondary">
									<Paragraph size="sm" appearance="primary">
										{card.text}
									</Paragraph>
								</Paper>
							</>
						))}

						{/* Окно добавления карточки */}
						{showDialogCard && (
							<Dialog
								size="md"
								component={<CreateCard />}
								placeholder="Введите описание карточки"
							/>
						)}

						{/* Первое создание карточки. */}
						{column.cards.length === 0 && !showDialogCard && (
							<OpenDialog type="card" text="Добавь первую карточку" />
						)}

						{/* Последующие создание карточки. */}
						{column.cards.length > 0 && !showDialogCard && (
							<OpenDialog type="card" text="Добавь еще одну карточку" />
						)}
					</Paper>
				))}

				{/* Окно добавления колонки */}
				{showDialog && (
					<Paper
						className={classNames(styles.kanban_column)}
						appearance="primary"
						size="md">
						<Dialog
							component={<CreateColumn />}
							placeholder="Введите название колонки"
						/>
					</Paper>
				)}

				{/* Первое создание колонки. */}
				{stateColums.length === 0 && !showDialog && (
					<Paper
						className={classNames(styles.kanban_column)}
						appearance="primary"
						size="md">
						<OpenDialog type="column" text="Добавь первую колонку" />
					</Paper>
				)}

				{/* Последующее создание колонок */}
				{stateColums.length > 0 && (
					<Paper
						className={classNames(styles.kanban_column)}
						appearance="primary"
						size="md">
						<OpenDialog type="column" text="Добавь еще одну колонку" />
					</Paper>
				)}

				{/* Первое создание карточки.
				{stateColums.length === 0 && !showDialog && (
					<Paper appearance="primary" size="md">
						<OpenDialog text="Добавь первую колонку" />
					</Paper>
				)} */}

				{/* {stateColums.length === 0 ? (
					<Paper
						size="md"
						className={classNames(styles.kanban_column)}
						appearance="primary">
						{showDialog ? (
							<Dialog
								component={<CreateColumn />}
								placeholder="Введите название колонки"
							/>
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
								className={classNames(styles.kanban_column)}
								appearance="primary">
								<Heading
									className={classNames(styles.kanban_title)}
									size="sm"
									tag="h2"
									appearance="primary">
									{column.title}
								</Heading>
								<OpenDialog text="Добавь еще одну карточку" />
							</Paper>
						</>
					)
				})}
				{stateColums.length > 0 && (
					<Paper
						size="md"
						className={classNames(styles.kanban_column)}
						appearance="primary">
						{showDialog ? (
							<Dialog
								component={<CreateColumn />}
								placeholder="Введите название колонки"
							/>
						) : (
							<OpenDialog text="Добавь еще одну колонку" />
						)}
					</Paper>
				)} */}
			</div>
		</main>
	)
}

export { Kanban }
