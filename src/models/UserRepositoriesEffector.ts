import axios from "axios"
import type { AxiosError } from "axios"
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

// Создайте новый эффект для получения репозиториев текущего пользователя
export const fetchUserListFx = createEffect(fetchUserRepositories)

export const loadUserList = createEvent()

// Создайте хранилище для хранения репозиториев текущего пользователя
export const $userRepositories = createStore<Repository[]>([])
  .on(loadUserList, () => [])
  .on(fetchUserListFx.doneData, (state, repositories) => repositories)

// Хранилище состояния загрузки
export const $userLoading = createStore(false).on(
  fetchUserListFx.pending,
  (_, pending) => pending,
)

// Хранилище для ошибок
export const $userError = createStore<FetchError | null>(null)
  .on(fetchUserListFx.failData, (_, error) => error)
  .reset(fetchUserListFx.doneData)

// Подписка на событие loadUserList для запуска эффекта
loadUserList.watch(() => {
  $userError.watch(() => null) // Сброс ошибки
  fetchUserListFx() // Запуск эффекта
})

// Сохранение репозиториев пользователя в сессии
persist({
  source: $userRepositories,
  target: $userRepositories,
  key: "USER_REPOSITORIES",
})
