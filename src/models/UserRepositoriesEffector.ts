import type { IUserRepository } from "../types/User.types"

import { createStore, createEvent, createEffect } from "effector"
import { persist } from "effector-storage/session"

import fetchUserRepositories from "../services/fetchUserRepositories"
interface FetchError {
  message: string
}

export const fetchUserListFx = createEffect(fetchUserRepositories)

export const loadUserList = createEvent()

export const $userRepositories = createStore<IUserRepository[]>([])
  .on(loadUserList, () => [])
  .on(fetchUserListFx.doneData, (_, repositories) => repositories)

export const $userLoading = createStore(false).on(
  fetchUserListFx.pending,
  (_, pending) => pending,
)

export const $userError = createStore<FetchError | null>(null)
  .on(fetchUserListFx.failData, (_, error) => error)
  .reset(fetchUserListFx.doneData)

persist({
  source: $userRepositories,
  target: $userRepositories,
  key: "USER_REPOSITORIES",
})
