import { createStore, createEvent, sample } from "effector"
import { persist } from "effector-storage/session"

// Шаг 1: Создаем событие для изменения номера текущей страницы
export const changeCurrentPage = createEvent<number>()

// Шаг 2: Создаем хранилище для хранения номера текущей страницы
export const $currentPage = createStore(1) // Начальная страница, например, 1
  .on(changeCurrentPage, (_, newPage) => newPage) // Обновление страницы при вызове события

// Пример получения текущей страницы
$currentPage.watch(currentPage => {
  console.log("Текущая стр", currentPage)
})

persist({
  source: $currentPage,
  target: $currentPage,
  key: "CURRENTPAGE",
})
