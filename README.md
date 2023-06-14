# Kanban

---

<img width="1162" alt="image" src="https://github.com/Binatik/images/assets/47430210/3a87ec04-64aa-4626-9a2c-2d8830b7d632">

## Проверить

Проверить последнюю версию web приложения можно [здесь](https://kanban-vk-test.netlify.app).

## Запуск

Для запуска у вас должен быть установлен [Node.js](http://nodejs.org)

Для установки пакетов используется [npm](https://www.npmjs.com)

```bash
npm install -g npm
```

```bash
$ git clone repository # Клонирование репозитория
$ npm i # Установка зависимостей
$ npm dev # Запуск в dev  режиме
```

```js
//scripts
"dev": "vite",
"build": "tsc && vite build",
"lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
"preview": "vite preview"
```

## Возможности:

-   Создавать колонку
-   Создавать карточку
-   Менять размер поля для ввода автоматически
-   Переносить колонку между колонками
-   Переносить карточку между колонками и карточками
-   Сохранять процесс переноса и создания
-   Управлять с клавиатуры
-   Двигать блок мышкой если не хватает места

## Двигать блок мышкой если не хватает места

Не до конца была проделана оптимизация `event`, не использовался например `throttling`

## Переносить колонку / карточку

Сейчас работает только настоящее API для `Drag and Drop`, оно не дает `event` для Touch Screen следовательно реализации переноса на любом виде смартфона/планшета отсудствует.
