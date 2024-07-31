import { createStore, createEvent, createEffect } from "effector"
import { persist } from "effector-storage/session"

import fetchRepositories from "../services/fetchRepositories"

interface Repository {
  id: number
  name: string
}

interface FetchError {
  message: string
}

export const fetchListFx = createEffect<string, Repository[], FetchError>(
  fetchRepositories,
)

export const loadList = createEvent<string>()

export const $repositories = createStore<Repository[]>([])
  .on(loadList, () => [])
  .on(fetchListFx.doneData, (state, repositories) => repositories)

export const $loading = createStore<boolean>(false).on(
  fetchListFx.pending,
  (_, pending) => pending,
)

export const $error = createStore<FetchError | null>(null)
  .on(fetchListFx.failData, (_, error) => error)
  .reset(fetchListFx.doneData)

loadList.watch(searchQuery => {
  $error.watch(() => null)
  fetchListFx(searchQuery)
})

persist({
  source: $repositories,
  target: $repositories,
  key: "REPOSITORIES",
})
