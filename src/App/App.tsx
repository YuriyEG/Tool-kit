import { useEffect, useState } from "react"

import styled from "styled-components"

import Pagination from "../shared/ui/Pagination"
import SearchInput from "../shared/ui/SearchInput"
import RepositoryList from "../widgets/RepositoryList"

import fetchRepositories from "../services/fetchRepositories"

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  text-align: center;
  background-color: rgb(223, 229, 206);
  padding-top: 80px;
`

const App = () => {
  const [page, setPage] = useState(1)
  const [query, setQuery] = useState("")
  const [repositories, setRepositories] = useState([])

  const searchHandler = query => {
    setQuery(query)
  }

  useEffect(() => {
    fetchRepositories(query).then(res => setRepositories(res))
  }, [query])

  const currentChunk = repositories.slice((page - 1) * 10, page * 10)

  return (
    <Container>
      <SearchInput searchHandler={searchHandler} query={query} />
      <RepositoryList list={currentChunk} />
      <Pagination
        totalItems={repositories.length}
        itemsPerPage={10}
        onPageChange={setPage}
        currentPage={page}
      />
    </Container>
  )
}

export default App
