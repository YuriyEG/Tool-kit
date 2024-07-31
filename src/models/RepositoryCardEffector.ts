import type { IRepositoryDetails } from "../types/RepositoryDetails.types"

import { createStore, createEvent, createEffect } from "effector"
import { persist } from "effector-storage/session"

import fetchRepositoryData from "../services/fetchRepositoryData"
interface FetchError {
  message: string
}

export const fetchRepositoryDataFx = createEffect<
  string,
  IRepositoryDetails,
  FetchError
>(fetchRepositoryData)

export const loadData = createEvent<string>()

export const $repositoryData = createStore<IRepositoryDetails[]>([])
  .on(loadData, () => [])
  .on(fetchRepositoryDataFx.doneData, (_, repositoryData) => repositoryData)

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
