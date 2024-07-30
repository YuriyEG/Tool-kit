import { createStore, createEvent, sample } from "effector"
import { persist } from "effector-storage/session"

// Шаг 1: Создаем событие для изменения номера текущей страницы
export const changeQuery = createEvent<number>()

// Шаг 2: Создаем хранилище для хранения номера текущей страницы
export const $query = createStore("") // Начальная страница, например, 1
  .on(changeQuery, (_, newPage) => newPage) // Обновление страницы при вызове события

// Пример получения текущей страницы
$query.watch(currentPage => {
  console.log("Текущая страница:", currentPage)
})

persist({
  source: $query,
  target: $query,
  key: "QUERY",
})
