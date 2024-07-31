import { createStore, createEvent } from "effector"
import { persist } from "effector-storage/session"

export const changeQuery = createEvent<number>()

export const $query = createStore("").on(changeQuery, (_, newPage) => newPage)

$query.watch(currentPage => {
  console.log("Текущая страница:", currentPage)
})

persist({
  source: $query,
  target: $query,
  key: "QUERY",
})
