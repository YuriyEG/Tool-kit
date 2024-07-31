import { createStore, createEvent } from "effector"
import { persist } from "effector-storage/session"

export const changeCurrentPage = createEvent<number>()

export const $currentPage = createStore(1).on(
  changeCurrentPage,
  (_, newPage) => newPage,
)

$currentPage.watch(currentPage => {
  console.log("Текущая стр", currentPage)
})

persist({
  source: $currentPage,
  target: $currentPage,
  key: "CURRENTPAGE",
})
