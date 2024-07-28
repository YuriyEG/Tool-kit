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

const debouncedFx = debouncer(fetchListFx, 550)

const Container = styled.div`
  margin: 0 auto;
  width: 500px;
  min-height: 200px;
`

const Repositories = () => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")

  const results = useUnit($repositories)
  const loading = useUnit($loading)

  const searchHandler = searchQuery => {
    setQuery(searchQuery)
    if (!searchQuery) {
      return
    }
    debouncedFx(searchQuery)
  }

  return (
    <Container>
      <SearchInput searchHandler={searchHandler} query={query} />
      <RepositoryList list={results} select={() => ""} />
      <Pagination
        totalItems={results.length}
        itemsPerPage={10}
        onPageChange={setPage}
        currentPage={page}
      />
    </Container>
  )
}

export default Repositories
