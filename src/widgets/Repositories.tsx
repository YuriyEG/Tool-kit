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

const Repositories = ({ changeId }) => {
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
      {!query && <p>Репозитории текущего пользователя</p>}
      {query && !results.length && <h3>Результатов не найдено</h3>}

      {!loading ? (
        !query ? (
          <RepositoryList results={userRepositories} />
        ) : (
          <RepositoryList results={results} />
        )
      ) : (
        <Loader />
      )}
    </Container>
  )
}

export default Repositories
