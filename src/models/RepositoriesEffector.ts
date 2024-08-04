import type { IRepository } from "../types/Repository.types"

import { createStore, createEvent, createEffect } from "effector"
import { persist } from "effector-storage/session"

import fetchRepositories from "../services/fetchRepositories"

interface FetchError {
  message: string
}

export const fetchListFx = createEffect<string, IRepository[], FetchError>(
  fetchRepositories,
)

export const loadList = createEvent<IRepository[]>()

export const $repositories = createStore<IRepository[]>([])
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
})

persist({
  source: $repositories,
  target: $repositories,
  key: "REPOSITORIES",
})
