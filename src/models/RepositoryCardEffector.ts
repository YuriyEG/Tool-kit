import { createStore, createEvent } from "effector"

// Событие для установки ID карточки
export const setCardId = createEvent()
// Событие для открытия карточки
export const openCard = createEvent()
// Событие для закрытия карточки
export const closeCard = createEvent()

// Состояние карточки
export const $repositoryCard = createStore({ id: "", isOpen: false })
  .on(setCardId, (state, id) => ({ ...state, id })) // обновляем id
  .on(openCard, state => ({ ...state, isOpen: true })) // открываем карточку
  .on(closeCard, state => ({ ...state, isOpen: false })) // закрываем карточку

// Пример использования

// Подписка на изменения состояния карточки
$repositoryCard.watch(state => {
  console.log("Card state:", state)
})
