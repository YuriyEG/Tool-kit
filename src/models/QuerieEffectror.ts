import type { Store } from "effector"

import { createStore, createEvent } from "effector"
import { persist } from "effector-storage/session"

export const changeQuery = createEvent<string>()

export const $query: Store<string> = createStore<string>("").on(
  changeQuery,
  (_, newPage) => newPage,
)

persist({
  source: $query,
  target: $query,
  key: "QUERY",
})
