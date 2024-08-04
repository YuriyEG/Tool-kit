import type { IRepository } from "../types/Repository.types"
import { useEffect, type FC } from "react"

import styled from "styled-components"
import { useUnit } from "effector-react"

import SearchInput from "../shared/ui/SearchInput"
import RepositoryList from "../features/RepositoryList"
import Loader from "../shared/ui/Loader"

import { debounce } from "lodash"

import {
  $loading,
  $repositories,
  fetchListFx,
} from "../models/RepositoriesEffector"
import {
  $userRepositories,
  fetchUserListFx,
} from "../models/UserRepositoriesEffector"
import { $query, changeQuery } from "../models/QueryEffector"
import { changeCurrentPage } from "../models/RepositoriesPaginationEffector"

import { CURRENTUSER } from "../mockAccessData/tokenAndUserName"

const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`

const Note = styled.div`
  padding: 20px;
`

const debouncedFx = debounce(fetchListFx, 300)

const Repositories: FC = () => {
  const results: IRepository[] = useUnit($repositories)
  const query = useUnit($query)
  const loading = useUnit($loading)
  const userRepositories: IRepository[] = useUnit($userRepositories)

  useEffect(() => {
    if (!userRepositories.length) {
      fetchUserListFx(CURRENTUSER)
    }
  }, [])

  const searchHandler = (searchQuery: string) => {
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
      {query.length === 0 && userRepositories.length > 0 && (
        <Note>Репозитории текущего пользователя</Note>
      )}
      {query.length > 0 && results.length === 0 && !loading && (
        <Note>Результатов не найдено</Note>
      )}
      {loading && <Loader />}
      {query.length === 0 && <RepositoryList results={userRepositories} />}
      {query.length > 0 && !loading && <RepositoryList results={results} />}
    </Container>
  )
}

export default Repositories
