import { useEffect, useState, useTransition } from "react"
import styled from "styled-components"
import SearchInput from "../shared/ui/SearchInput"
import RepositoryList from "../features/RepositoryList"
import Pagination from "../shared/ui/Pagination"

import { $userRepositories } from "../models/UserRepositoriesEffector"
import { fetchUserListFx } from "../models/UserRepositoriesEffector"

import {
  $loading,
  $repositories,
  fetchListFx,
} from "../models/RepositoriesEffector"
import { useUnit } from "effector-react"
import debouncer from "../helper/debouncer"

import { $currentPage } from "../models/RepositoriesPagination"
import { changeCurrentPage } from "../models/RepositoriesPagination"

import { $query } from "../models/QuerieEffectror"
import { changeQuery } from "../models/QuerieEffectror"
import Loader from "../shared/ui/Loader"

const debouncedFx = debouncer(fetchListFx, 550)

const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  min-height: 200px;
`

const Note = styled.div`
  padding: 20px;
`

const Repositories = () => {
  const results = useUnit($repositories)

  const query = useUnit($query)
  const loading = useUnit($loading)

  const userRepositories = useUnit($userRepositories)

  if (!userRepositories.length) fetchUserListFx("germanovich-yuiry")

  const searchHandler = searchQuery => {
    changeQuery(searchQuery)
    changeCurrentPage(1)

    if (searchQuery.trim()) {
      debouncedFx(searchQuery)
    }
  }

  const clearHandler = () => {
    changeQuery("")
  }

  return (
    <Container>
      <SearchInput
        searchHandler={searchHandler}
        query={query}
        onClear={clearHandler}
      />
      {query.length === 0 && userRepositories.length && (
        <Note>Репозитории текущего пользователя</Note>
      )}
      {query && results.length === 0 && <Note>Результатов не найдено</Note>}
      {loading && <Loader />}
      {!query && <RepositoryList results={userRepositories} />}
      {query && <RepositoryList results={results} />}
    </Container>
  )
}

export default Repositories
