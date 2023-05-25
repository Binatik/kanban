import { useSelector } from 'react-redux'
import { Heading, Paper, Paragraph } from '../../entities'
import { RootState } from '../../app/store/store'
import { OpenDialog } from '../../features'
import { Dialog } from '../../widgets'
import classNames from 'classnames'
import styles from './Kanban.module.css'

function Kanban() {
	const state = {
		colums: useSelector((state: RootState) => state.kanbanReducer.colums),
		showDialog: useSelector((state: RootState) => state.kanbanReducer.showDialog),
		showDialogCard: useSelector((state: RootState) => state.kanbanReducer.showDialogCard),
		clickIndex: useSelector((state: RootState) => state.kanbanReducer.clickIndex),
	}

	return (
		<main className="container_extra">
			<div className={styles.kanban_list}>
				{/* //Структура канбана */}
				{state.colums.map((column, index: number) => (
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

						{/* Первое создание карточки. */}
						{column.cards.length === 0 && !state.showDialogCard && (
							<OpenDialog index={index} type="card" text="Добавь первую карточку" />
						)}

						{/* Последующие создание карточки. */}
						{column.cards.length > 0 && !state.showDialogCard ? (
							<OpenDialog index={index} type="card" text="Добавь еще одну карточку" />
						) : null}

						{/* Создание карточки в месте где не было клика */}
						{state.showDialogCard &&
						state.clickIndex !== index &&
						column.cards.length === 0 ? (
							<OpenDialog index={index} type="card" text="Добавь первую карточку" />
						) : null}

						{/* Последующие создание карточки в месте где не было клика */}
						{state.showDialogCard &&
						state.clickIndex !== index &&
						column.cards.length > 0 ? (
							<OpenDialog index={index} type="card" text="Добавь еще одну карточку" />
						) : null}

						{/* Окно добавления карточки */}
						{state.clickIndex === index && state.showDialogCard && (
							<Dialog
								size="md"
								command="createCard"
								placeholder="Введите описание карточки"
							/>
						)}
					</Paper>
				))}

				{/* Окно добавления колонки */}
				{state.showDialog && (
					<Paper
						className={classNames(styles.kanban_column)}
						appearance="primary"
						size="md">
						<Dialog command="createColumn" placeholder="Введите название колонки" />
					</Paper>
				)}

				{/* Первое создание колонки. */}
				{state.colums.length === 0 && !state.showDialog && (
					<Paper
						className={classNames(styles.kanban_column)}
						appearance="primary"
						size="md">
						<OpenDialog index={0} type="column" text="Добавь первую колонку" />
					</Paper>
				)}

				{/* Последующее создание колонок */}
				{state.colums.length > 0 && (
					<Paper
						className={classNames(styles.kanban_column)}
						appearance="primary"
						size="md">
						<OpenDialog index={0} type="column" text="Добавь еще одну колонку" />
					</Paper>
				)}
			</div>
		</main>
	)
}

export { Kanban }
