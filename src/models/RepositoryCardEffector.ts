import axios from "axios"
import type { AxiosError } from "axios"

import { createStore, createEvent, createEffect } from "effector"
import { persist } from "effector-storage/session"

import fetchRepositoryData from "../services/fetchRepositoryData"

interface Repository {
  id: number
  name: string
}

interface FetchError {
  message: string
}

export const fetchRepositoryDataFx = createEffect<
  string,
  Repository,
  FetchError
>(fetchRepositoryData)

export const loadData = createEvent<string>()

export const $repositoryData = createStore<Repository[]>([])
  .on(loadData, () => [])
  .on(fetchRepositoryDataFx.doneData, (state, repositoryData) => repositoryData)

export const $loading = createStore<boolean>(false).on(
  fetchRepositoryDataFx.pending,
  (_, pending) => pending,
)

export const $error = createStore<FetchError | null>(null)
  .on(fetchRepositoryDataFx.failData, (_, error) => error)
  .reset(fetchRepositoryDataFx.doneData)

loadData.watch(searchQuery => {
  $error.watch(() => null)
  fetchRepositoryDataFx(searchQuery)
})

persist({
  source: $repositoryData,
  target: $repositoryData,
  key: "REPOSITORYDATA",
})
