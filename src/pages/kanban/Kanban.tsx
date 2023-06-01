import { useSelector } from 'react-redux'
import { Heading, Paper, Paragraph } from '../../entities'
import { RootState } from '../../app/store/store'
import { Draggable, OpenDialog } from '../../features'
import { Dialog } from '../../widgets'
import classNames from 'classnames'
import styles from './Kanban.module.css'
import { useRef, useState } from 'react'

function Kanban() {
	const state = {
		colums: useSelector((state: RootState) => state.kanbanReducer.colums),
		showDialog: useSelector((state: RootState) => state.kanbanReducer.showDialog),
		showDialogCard: useSelector((state: RootState) => state.kanbanReducer.showDialogCard),
		clickIndex: useSelector((state: RootState) => state.kanbanReducer.clickIndex),
		table: useSelector((state: RootState) => state.kanbanReducer.table),
	}

	console.log(state.table)

	const listRef = useRef<HTMLDivElement | null>(null)

	const [isDown, setIsDown] = useState(false)
	const [startX, setStartX] = useState(0)
	const [scrollLeft, setScrollLeft] = useState(0)

	function scrollTouchDown(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		const list = listRef.current
		if (!list) return

		setIsDown(true)
		const diff = event.pageX - list.offsetLeft
		setStartX(diff)
		setScrollLeft(list.scrollLeft)
	}

	function scrollTouchMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		if (!isDown) return

		const list = listRef.current
		if (!list) return

		const x = event.pageX - list.offsetLeft
		const walk = (x - startX) * 1 // скорость прокрутки
		list.scrollLeft = scrollLeft - walk
	}

	function scrollTouchUp(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
		setIsDown(false)
	}

	return (
		<div className="wrapper">
			<main className={classNames('container_extra', 'content')}>
				<div
					onMouseDown={scrollTouchDown}
					onMouseMove={scrollTouchMove}
					onMouseUp={scrollTouchUp}
					onMouseLeave={() => setIsDown(false)}
					ref={listRef}
					className={styles.kanban_list}>
					{/* //Структура канбана */}
					{state.colums.map((column, index: number) => (
						<Draggable dataType="column" htmlID={column.id} key={column.id}>
							<Paper
								className={classNames(styles.kanban_column)}
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
									<Draggable dataType="cards" htmlID={card.id} key={card.id}>
										<Paper
											className={classNames(styles.kanban_item)}
											size="sm"
											appearance="secondary">
											<Paragraph size="sm" appearance="primary">
												{card.text}
											</Paragraph>
										</Paper>
									</Draggable>
								))}
								{/* Первое создание карточки. */}
								{column.cards.length === 0 && !state.showDialogCard && (
									<OpenDialog
										key={column.id}
										index={index}
										type="card"
										text="Добавь первую карточку"
									/>
								)}

								{/* Последующие создание карточки. */}
								{column.cards.length > 0 && !state.showDialogCard ? (
									<OpenDialog
										key={column.id}
										index={index}
										type="card"
										text="Добавь еще одну карточку"
									/>
								) : null}

								{/* Создание карточки в месте где не было клика */}
								{state.showDialogCard &&
								state.clickIndex !== index &&
								column.cards.length === 0 ? (
									<OpenDialog
										key={column.id}
										index={index}
										type="card"
										text="Добавь первую карточку"
									/>
								) : null}

								{/* Последующие создание карточки в месте где не было клика */}
								{state.showDialogCard &&
								state.clickIndex !== index &&
								column.cards.length > 0 ? (
									<OpenDialog
										key={column.id}
										index={index}
										type="card"
										text="Добавь еще одну карточку"
									/>
								) : null}

								{/* Окно добавления карточки */}
								{state.clickIndex === index && state.showDialogCard && (
									<Dialog
										key={column.id}
										size="md"
										command="createCard"
										placeholder="Введите описание карточки"
									/>
								)}
							</Paper>
						</Draggable>
					))}

					{/* Окно добавления колонки */}
					{state.showDialog && (
						<Paper
							key={5}
							className={classNames(styles.kanban_column)}
							appearance="primary"
							size="md">
							<Dialog command="createColumn" placeholder="Введите название колонки" />
						</Paper>
					)}

					{/* Первое создание колонки. */}
					{state.colums.length === 0 && !state.showDialog && (
						<Paper
							key={6}
							className={classNames(styles.kanban_column)}
							appearance="primary"
							size="md">
							<OpenDialog index={0} type="column" text="Добавь первую колонку" />
						</Paper>
					)}

					{/* Последующее создание колонок */}
					{state.colums.length > 0 && (
						<Paper
							key={7}
							className={classNames(styles.kanban_column)}
							appearance="primary"
							size="md">
							<OpenDialog index={0} type="column" text="Добавь еще одну колонку" />
						</Paper>
					)}
				</div>
			</main>
		</div>
	)
}

export { Kanban }
