import { createStore, createEvent, createEffect } from "effector"
import { persist } from "effector-storage/session"
import fetchUserRepositories from "../services/fetchUserRepositories" // Импорт вашего нового сервиса

interface Repository {
  id: number
  name: string
}

interface FetchError {
  message: string
}

export const fetchUserListFx = createEffect(fetchUserRepositories)

export const loadUserList = createEvent()

export const $userRepositories = createStore<Repository[]>([])
  .on(loadUserList, () => [])
  .on(fetchUserListFx.doneData, (state, repositories) => repositories)

export const $userLoading = createStore(false).on(
  fetchUserListFx.pending,
  (_, pending) => pending,
)

export const $userError = createStore<FetchError | null>(null)
  .on(fetchUserListFx.failData, (_, error) => error)
  .reset(fetchUserListFx.doneData)

loadUserList.watch(() => {
  $userError.watch(() => null)
  fetchUserListFx()
})

persist({
  source: $userRepositories,
  target: $userRepositories,
  key: "USER_REPOSITORIES",
})
