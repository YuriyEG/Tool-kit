Deploy https://tool-18obpl1us-yuriyegs-projects.vercel.app/

# Тестовое задание frontend developer

Необходимо используя Github GraphQL API (https://docs.github.com/ru/graphql) создать frontend приложение, которое состоит из двух страниц:

1. Главная страница – список репозиториев с возможностью поиска и страницами
2. Карточка репозитория – страница с детальной информацией по репозиторию

## Главная страница

Ключевые элементы страницы:

- `Поле для поиска` репозиториев
- `Список репозиториев`
- `Paginator` – список страниц

При введении текста в `Поле для поиска`, должен происходить поиск по названию среди всех репозиториев Github и выводиться его результат в `Список репозиториев` ниже.

Если в поле ничего не введено, то показывается список репозиториев текущего пользователя.

Примерная структура элементов списка:

`[Название репозитория]` - `[кол-во звёзд на github]` - `[дата последнего коммита]` - `[ссылка на Github]`

Внизу страницы есть `Paginator` вида [1, 2, 3, 4, 5]. Не показывать больше 10 страниц.

При клике на вторую страницу показываются репозитории с 11 по 20. При клике на третью страницу показываются репозитории с 21 по 30 … и т.д.

Выбранная страница в `Paginator` должна отличаться по стилю от всех остальных.

При перезагрузке страницы состояние выбранных фильтров (поиска и страницы) должно сохраняться и использоваться для первоначального запроса.

Поиск должен происходить на стороне API.

При клике на название репозитория происходит переход на `Карточку репозитория`.

## **Карточка репозитория**

Карточка должна иметь следующую структуру:

- [`Название репозитория`] - [`кол-во звёзд на github`] - [`дата последнего коммита`]
- [`Фото владельца репозитория, если есть`] - [`Nickname владельца репозитория с ссылкой на него`]
- [`Список используемых языков в репозитории`]
- [`Краткое описание репозитория`]

## Дополнительно

Плюсом будет, если вы покроете end-to-end и или unit / интеграционными тестами функционал приложения можно использовать Playwright или Cypress для e2e и vitest + react-testing-library для unit/integration.

## Требования

- Основные технологии - Vite, Typescript, React, GraphQL
- Архитектура приложения должна соответствовать FSD
- Использовать стейт-менеджер на выбор: zustand / effector (желательно). Данные должны храниться в стейт-менеджере.
- Готовые UI библиотеки использовать нельзя, все нужно сверстать самостоятельно
- Структура приложения должна быть с расчетом на будущий рост

В остальном выбирайте любые инструменты для выполнения задания. Главное, чтобы вашим приложением можно было пользоваться в рамках описанных сценариев. Насчёт дизайна можете много не думать – ссылок, кнопок и заголовков будет достаточно. Тем не менее сделайте это так, чтобы этим можно было пользоваться.

**Результатом работы должна быть ссылка на ваш личный репозиторий. Идеальным вариантом станет еще ссылка на работающее приложение.**
