import { useEffect, useState, useTransition } from "react"
import styled from "styled-components"
import SearchInput from "../shared/ui/SearchInput"
import RepositoryList from "../features/RepositoryList"
import Pagination from "../shared/ui/Pagination"
import {
  $loading,
  $repositories,
  fetchListFx,
} from "../models/RepositoriesEffector"
import { useUnit } from "effector-react"
import debouncer from "../helper/debouncer"

import { $repositoryCard } from "../models/RepositoryCardEffector"
import { $currentPage } from "../models/RepositoriesPagination"
import { changeCurrentPage } from "../models/RepositoriesPagination"
import { setCardId, openCard } from "../models/RepositoryCardEffector"

const debouncedFx = debouncer(fetchListFx, 550)

const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  min-height: 200px;
`

const Repositories = ({ changeId }) => {
  const [query, setQuery] = useState("")

  const results = useUnit($repositories)
  const currentPage = useUnit($currentPage)
  const loading = useUnit($loading)

  const searchHandler = searchQuery => {
    setQuery(searchQuery)
    if (!searchQuery) {
      return
    }
    debouncedFx(searchQuery)
  }

  const openCardHandler = id => {
    console.log("$", id)
    setCardId(id)
    openCard()
  }

  const currentChunk = results.slice((currentPage - 1) * 10, currentPage * 10)
  return (
    <Container>
      <SearchInput searchHandler={searchHandler} query={query} />
      <RepositoryList list={currentChunk} changeId={openCardHandler} />
      <Pagination
        totalItems={results.length}
        itemsPerPage={10}
        onPageChange={changeCurrentPage}
        currentPage={currentPage}
      />
    </Container>
  )
}

export default Repositories
