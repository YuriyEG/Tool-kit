import { useEffect, useState, useTransition } from "react"
import styled from "styled-components"
import SearchInput from "../shared/ui/SearchInput"
import RepositoryList from "../features/RepositoryList"
import Pagination from "../shared/ui/Pagination"
import {
  $loading,
  $repositories,
  fetchListFx,
  loadList,
} from "../models/RepositoriesEffector"
import { useUnit } from "effector-react"
import debouncer from "../helper/debouncer"

import { $repositoryCard } from "../models/RepositoryCardEffector"
import { $currentPage } from "../models/RepositoriesPagination"
import { changeCurrentPage } from "../models/RepositoriesPagination"
import { setCardId, openCard } from "../models/RepositoryCardEffector"
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
  const currentPage = useUnit($currentPage)
  const query = useUnit($query)
  const loading = useUnit($loading)

  const searchHandler = searchQuery => {
    changeQuery(searchQuery)

    if (searchQuery.trim()) {
      debouncedFx(searchQuery)
    }
  }

  const clearHandler = () => {
    changeQuery("")
  }

  const openCardHandler = id => {
    console.log("$", id)
    setCardId(id)
    openCard()
  }

  const currentChunk = results.slice((currentPage - 1) * 10, currentPage * 10)
  return (
    <Container>
      <SearchInput
        searchHandler={searchHandler}
        query={query}
        onClear={clearHandler}
      />
      {!loading ? (
        <RepositoryList list={currentChunk} changeId={openCardHandler} />
      ) : (
        <Loader />
      )}

      {results.length > 0 && (
        <Pagination
          totalItems={results.length}
          itemsPerPage={10}
          onPageChange={changeCurrentPage}
          currentPage={currentPage}
        />
      )}
    </Container>
  )
}

export default Repositories
